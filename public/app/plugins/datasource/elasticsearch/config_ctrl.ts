///<reference path="../../../headers/common.d.ts" />

import angular from 'angular';
import _ from 'lodash';

export class ElasticConfigCtrl {
  static templateUrl = 'public/app/plugins/datasource/elasticsearch/partials/config.html';
  current: any;

  /** @ngInject */
  constructor($scope) {
    this.current.jsonData.timeField = this.current.jsonData.timeField || '@timestamp';
  }

  indexPatternTypes = [
    {name: 'No pattern',  value: undefined},
    {name: 'Hourly',      value: 'Hourly',  example: '[logstash-]YYYY.MM.DD.HH'},
    {name: 'Daily',       value: 'Daily',   example: '[logstash-]YYYY.MM.DD'},
    {name: 'Weekly',      value: 'Weekly',  example: '[logstash-]GGGG.WW'},
    {name: 'Monthly',     value: 'Monthly', example: '[logstash-]YYYY.MM'},
    {name: 'Yearly',      value: 'Yearly',  example: '[logstash-]YYYY'},
  ];

  esVersions = [
    {name: '1.x', value: 1},
    {name: '2.x', value: 2},
  ];

  indexPatternTypeChanged() {
    var def = _.findWhere(this.indexPatternTypes, {value: this.current.jsonData.interval});
    this.current.database = def.example || 'es-index-name';
  }
}

