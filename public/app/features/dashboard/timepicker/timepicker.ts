///<reference path="../../../headers/common.d.ts" />

import _ from 'lodash';
import angular from 'angular';
import moment from 'moment';

import * as rangeUtil from 'app/core/utils/rangeutil';

export class TimePickerCtrl {

  static tooltipFormat = 'MMM D, YYYY HH:mm:ss';
  static defaults = {
    time_options: ['5m', '15m', '1h', '6h', '12h', '24h', '2d', '7d', '30d'],
    refresh_intervals: ['5s', '10s', '30s', '1m', '5m', '15m', '30m', '1h', '2h', '1d'],
  };

  dashboard: any;
  panel: any;
  absolute: any;
  timeRaw: any;
  tooltip: string;
  rangeString: string;
  timeOptions: any;
  refresh: any;
  isOpen: boolean;
  isUtc: boolean;

  /** @ngInject */
  constructor(private $scope, private $rootScope, private timeSrv) {
    $scope.ctrl = this;

    $rootScope.onAppEvent('shift-time-forward', () => this.move(1), $scope);
    $rootScope.onAppEvent('shift-time-backward', () => this.move(-1), $scope);
    $rootScope.onAppEvent('refresh', () => this.init(), $scope);
    $rootScope.onAppEvent('dash-editor-hidden', () => this.isOpen = false, $scope);

    this.init();
  }

  init() {
    this.panel = this.dashboard.timepicker;

    _.defaults(this.panel, TimePickerCtrl.defaults);

    var time = angular.copy(this.timeSrv.timeRange());
    var timeRaw = angular.copy(this.timeSrv.timeRange(false));

    if (!this.dashboard.isTimezoneUtc()) {
      time.from.local();
      time.to.local();
      if (moment.isMoment(timeRaw.from)) {
        timeRaw.from.local();
      }
      if (moment.isMoment(timeRaw.to)) {
        timeRaw.to.local();
      }
    } else {
      this.isUtc = true;
    }

    this.rangeString = rangeUtil.describeTimeRange(timeRaw);
    this.absolute = {fromJs: time.from.toDate(), toJs: time.to.toDate()};
    this.tooltip = this.dashboard.formatDate(time.from) + ' <br>to<br>';
    this.tooltip += this.dashboard.formatDate(time.to);

    // do not update time raw when dropdown is open
    // as auto refresh will reset the from/to input fields
    if (!this.isOpen) {
      this.timeRaw = timeRaw;
    }
  }

  zoom(factor) {
    this.$rootScope.appEvent('zoom-out', 2);
  }

  move(direction) {
    var range = this.timeSrv.timeRange();

    var timespan = (range.to.valueOf() - range.from.valueOf()) / 2;
    var to, from;
    if (direction === -1) {
      to = range.to.valueOf() - timespan;
      from = range.from.valueOf() - timespan;
    } else if (direction === 1) {
      to = range.to.valueOf() + timespan;
      from = range.from.valueOf() + timespan;
      if (to > Date.now() && range.to < Date.now()) {
        to = Date.now();
        from = range.from.valueOf();
      }
    } else {
      to = range.to.valueOf();
      from = range.from.valueOf();
    }

    this.timeSrv.setTime({from: moment.utc(from), to: moment.utc(to) });

  }

  openDropdown() {
    this.init();
    this.isOpen = true;
    this.timeOptions = rangeUtil.getRelativeTimesList(this.panel, this.rangeString);
    this.refresh = {
      value: this.dashboard.refresh,
      options: _.map(this.panel.refresh_intervals, (interval: any) => {
        return {text: interval, value: interval};
      })
    };

    this.refresh.options.unshift({text: 'off'});

    this.$rootScope.appEvent('show-dash-editor', {
      src: 'public/app/features/dashboard/timepicker/dropdown.html',
      scope: this.$scope,
      cssClass: 'gf-timepicker-dropdown',
    });
  }

  applyCustom() {
    if (this.refresh.value !== this.dashboard.refresh) {
      this.timeSrv.setAutoRefresh(this.refresh.value);
    }

    this.timeSrv.setTime(this.timeRaw, true);
    this.$rootScope.appEvent('hide-dash-editor');
  }

  absoluteFromChanged() {
    this.timeRaw.from = this.getAbsoluteMomentForTimezone(this.absolute.fromJs);
  }

  absoluteToChanged() {
    this.timeRaw.to = this.getAbsoluteMomentForTimezone(this.absolute.toJs);
  }

  getAbsoluteMomentForTimezone(jsDate) {
    return this.dashboard.isTimezoneUtc() ? moment(jsDate).utc() : moment(jsDate);
  }

  setRelativeFilter(timespan) {
    var range = {from: timespan.from, to: timespan.to};

    if (this.panel.nowDelay && range.to === 'now') {
      range.to = 'now-' + this.panel.nowDelay;
    }

    this.timeSrv.setTime(range);
    this.$rootScope.appEvent('hide-dash-editor');
  }

}

export function settingsDirective() {
  return {
    restrict: 'E',
    templateUrl: 'public/app/features/dashboard/timepicker/settings.html',
    controller: TimePickerCtrl,
    bindToController: true,
    controllerAs: 'ctrl',
    scope: {
      dashboard: "="
    }
  };
}

export function timePickerDirective() {
  return {
    restrict: 'E',
    templateUrl: 'public/app/features/dashboard/timepicker/timepicker.html',
    controller: TimePickerCtrl,
    bindToController: true,
    controllerAs: 'ctrl',
    scope: {
      dashboard: "="
    }
  };
}


angular.module('grafana.directives').directive('gfTimePickerSettings', settingsDirective);
angular.module('grafana.directives').directive('gfTimePicker', timePickerDirective);

import {inputDateDirective} from './input_date';
angular.module("grafana.directives").directive('inputDatetime', inputDateDirective);
