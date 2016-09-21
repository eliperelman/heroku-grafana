///<reference path="../../headers/common.d.ts" />

import angular from 'angular';
import _ from 'lodash';
import $ from 'jquery';
import coreModule from 'app/core/core_module';
import appEvents from 'app/core/app_events';

export class AlertSrv {
  list: any[];

  /** @ngInject */
  constructor(private $timeout, private $sce, private $rootScope, private $modal) {
    this.list = [];
  }

  init() {
    this.$rootScope.onAppEvent('alert-error', (e, alert) => {
      this.set(alert[0], alert[1], 'error', 0);
    }, this.$rootScope);

    this.$rootScope.onAppEvent('alert-warning', (e, alert) => {
      this.set(alert[0], alert[1], 'warning', 5000);
    }, this.$rootScope);

    this.$rootScope.onAppEvent('alert-success', (e, alert) => {
      this.set(alert[0], alert[1], 'success', 3000);
    }, this.$rootScope);

    appEvents.on('confirm-modal', this.showConfirmModal.bind(this));
  }

  set(title, text, severity, timeout) {
    var newAlert = {
      title: title || '',
      text: text || '',
      severity: severity || 'info',
    };

    var newAlertJson = angular.toJson(newAlert);

    // remove same alert if it already exists
    _.remove(this.list, function(value) {
      return angular.toJson(value) === newAlertJson;
    });

    this.list.push(newAlert);
    if (timeout > 0) {
      this.$timeout(() => {
        this.list = _.without(this.list, newAlert);
      }, timeout);
    }

    if (!this.$rootScope.$$phase) {
      this.$rootScope.$digest();
    }

    return(newAlert);
  }

  clear(alert) {
    this.list = _.without(this.list, alert);
  }

  clearAll() {
    this.list = [];
  }

  showConfirmModal(payload) {
    var scope = this.$rootScope.$new();

    scope.title = payload.title;
    scope.text = payload.text;
    scope.text2 = payload.text2;
    scope.onConfirm = payload.onConfirm;
    scope.onAltAction = payload.onAltAction;
    scope.altActionText = payload.altActionText;
    scope.icon = payload.icon || "fa-check";
    scope.yesText = payload.yesText || "Yes";
    scope.noText = payload.noText || "Cancel";

    var confirmModal = this.$modal({
      template: 'public/app/partials/confirm_modal.html',
      persist: false,
      modalClass: 'confirm-modal',
      show: false,
      scope: scope,
      keyboard: false
    });

    confirmModal.then(function(modalEl) {
      modalEl.modal('show');
    });
  }
}

coreModule.service('alertSrv', AlertSrv);
