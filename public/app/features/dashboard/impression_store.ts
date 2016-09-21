///<reference path="../../headers/common.d.ts" />

import store from 'app/core/store';
import _ from 'lodash';
import config from 'app/core/config';

export class ImpressionsStore {
  constructor() {}

  addDashboardImpression(dashboardId) {
    var impressionsKey = this.impressionKey(config);
    var impressions = [];
    if (store.exists(impressionsKey)) {
      impressions = JSON.parse(store.get(impressionsKey));
      if (!_.isArray(impressions)) {
        impressions = [];
      }
    }

    impressions = impressions.filter((imp) => {
      return dashboardId !== imp;
    });

    impressions.unshift(dashboardId);

    if (impressions.length > 50) {
      impressions.pop();
    }
    store.set(impressionsKey, JSON.stringify(impressions));
  }

  getDashboardOpened() {
    var impressions = store.get(this.impressionKey(config)) || "[]";

    impressions = JSON.parse(impressions);

    impressions = _.filter(impressions, el => {
      return _.isNumber(el);
    });

    return impressions;
  }

  impressionKey(config) {
    return "dashboard_impressions-" + config.bootData.user.orgId;
  }
}

var impressions = new ImpressionsStore();

export {
  impressions
};
