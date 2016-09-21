///<reference path="../../headers/common.d.ts" />

import config from 'app/core/config';
import _ from 'lodash';
import angular from 'angular';
import $ from 'jquery';
import {profiler} from 'app/core/profiler';

const TITLE_HEIGHT = 25;
const EMPTY_TITLE_HEIGHT = 9;
const PANEL_PADDING = 5;
const PANEL_BORDER = 2;

import {Emitter} from 'app/core/core';

export class PanelCtrl {
  panel: any;
  row: any;
  dashboard: any;
  editorTabIndex: number;
  pluginName: string;
  pluginId: string;
  editorTabs: any;
  $scope: any;
  $injector: any;
  $timeout: any;
  fullscreen: boolean;
  inspector: any;
  editModeInitiated: boolean;
  editorHelpIndex: number;
  editMode: any;
  height: any;
  containerHeight: any;
  events: Emitter;
  timing: any;

  constructor($scope, $injector) {
    this.$injector = $injector;
    this.$scope = $scope;
    this.$timeout = $injector.get('$timeout');
    this.editorTabIndex = 0;
    this.events = new Emitter();
    this.timing = {};

    var plugin = config.panels[this.panel.type];
    if (plugin) {
      this.pluginId = plugin.id;
      this.pluginName = plugin.name;
    }

    $scope.$on("refresh", () => this.refresh());
    $scope.$on("render", () => this.render());
    $scope.$on("$destroy", () => this.events.emit('panel-teardown'));
  }

  init() {
    this.calculatePanelHeight();
    this.publishAppEvent('panel-initialized', {scope: this.$scope});
    this.events.emit('panel-initialized');
  }

  renderingCompleted() {
    profiler.renderingCompleted(this.panel.id, this.timing);
  }

  refresh() {
    this.events.emit('refresh', null);
  }

  publishAppEvent(evtName, evt) {
    this.$scope.$root.appEvent(evtName, evt);
  }

  changeView(fullscreen, edit) {
    this.publishAppEvent('panel-change-view', {
      fullscreen: fullscreen, edit: edit, panelId: this.panel.id
    });
  }

  viewPanel() {
    this.changeView(true, false);
  }

  editPanel() {
    this.changeView(true, true);
  }

  exitFullscreen() {
    this.changeView(false, false);
  }

  initEditMode() {
    this.editorTabs = [];
    this.addEditorTab('General', 'public/app/partials/panelgeneral.html');
    this.editModeInitiated = true;
    this.events.emit('init-edit-mode', null);

    var routeParams = this.$injector.get('$routeParams');
    if (routeParams.editorTab) {
      this.editorTabs.forEach((tab, i) => {
        if (tab.title === routeParams.editorTab) {
          this.editorTabIndex = i;
        }
      });
    }
  }

  changeTab(newIndex) {
    this.editorTabIndex = newIndex;
    var route = this.$injector.get('$route');

    route.current.params.editorTab = this.editorTabs[newIndex].title;
    route.updateParams();
  }

  addEditorTab(title, directiveFn, index?) {
    var editorTab = {title, directiveFn};

    if (_.isString(directiveFn)) {
      editorTab.directiveFn = function() {
        return {templateUrl: directiveFn};
      };
    }
    if (index) {
      this.editorTabs.splice(index, 0, editorTab);
    } else {
      this.editorTabs.push(editorTab);
    }
  }

  getMenu() {
    let menu = [];
    menu.push({text: 'View', click: 'ctrl.viewPanel(); dismiss();'});
    menu.push({text: 'Edit', click: 'ctrl.editPanel(); dismiss();', role: 'Editor'});
    if (!this.fullscreen) { //  duplication is not supported in fullscreen mode
      menu.push({ text: 'Duplicate', click: 'ctrl.duplicate()', role: 'Editor' });
    }
    menu.push({text: 'Share', click: 'ctrl.sharePanel(); dismiss();'});
    return menu;
  }

  getExtendedMenu() {
    var actions = [{text: 'Panel JSON', click: 'ctrl.editPanelJson(); dismiss();'}];
    this.events.emit('init-panel-actions', actions);
    return actions;
  }

  otherPanelInFullscreenMode() {
    return this.dashboard.meta.fullscreen && !this.fullscreen;
  }

  calculatePanelHeight() {
    if (this.fullscreen) {
      var docHeight = $(window).height();
      var editHeight = Math.floor(docHeight * 0.3);
      var fullscreenHeight = Math.floor(docHeight * 0.7);
      this.containerHeight = this.editMode ? editHeight : fullscreenHeight;
    } else {
      this.containerHeight = this.panel.height || this.row.height;
      if (_.isString(this.containerHeight)) {
        this.containerHeight = parseInt(this.containerHeight.replace('px', ''), 10);
      }
    }

    this.height = this.containerHeight - (PANEL_BORDER + PANEL_PADDING + (this.panel.title ? TITLE_HEIGHT : EMPTY_TITLE_HEIGHT));
  }

  render(payload?) {
    // ignore if other panel is in fullscreen mode
    if (this.otherPanelInFullscreenMode()) {
      return;
    }

    this.calculatePanelHeight();
    this.timing.renderStart = new Date().getTime();
    this.events.emit('render', payload);
  }

  toggleEditorHelp(index) {
    if (this.editorHelpIndex === index) {
      this.editorHelpIndex = null;
      return;
    }
    this.editorHelpIndex = index;
  }

  duplicate() {
    this.dashboard.duplicatePanel(this.panel, this.row);
  }

  updateColumnSpan(span) {
    this.panel.span = Math.min(Math.max(Math.floor(this.panel.span + span), 1), 12);
    this.$timeout(() => {
      this.render();
    });
  }

  removePanel() {
    this.publishAppEvent('confirm-modal', {
      title: 'Remove Panel',
      text: 'Are you sure you want to remove this panel?',
      icon: 'fa-trash',
      yesText: 'Remove',
      onConfirm: () => {
        this.row.panels = _.without(this.row.panels, this.panel);
      }
    });
  }

  editPanelJson() {
    this.publishAppEvent('show-json-editor', {
      object: this.panel,
      updateHandler: this.replacePanel.bind(this)
    });
  }

  replacePanel(newPanel, oldPanel) {
    var row = this.row;
    var index = _.indexOf(this.row.panels, oldPanel);
    this.row.panels.splice(index, 1);

    // adding it back needs to be done in next digest
    this.$timeout(() => {
      newPanel.id = oldPanel.id;
      newPanel.span = oldPanel.span;
      this.row.panels.splice(index, 0, newPanel);
    });
  }

  sharePanel() {
    var shareScope = this.$scope.$new();
    shareScope.panel = this.panel;
    shareScope.dashboard = this.dashboard;

    this.publishAppEvent('show-modal', {
      src: 'public/app/features/dashboard/partials/shareModal.html',
      scope: shareScope
    });
  }

  openInspector() {
    var modalScope = this.$scope.$new();
    modalScope.panel = this.panel;
    modalScope.dashboard = this.dashboard;
    modalScope.inspector = angular.copy(this.inspector);

    this.publishAppEvent('show-modal', {
      src: 'public/app/partials/inspector.html',
      scope: modalScope
    });
  }
}
