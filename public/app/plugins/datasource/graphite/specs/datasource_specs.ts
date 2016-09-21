
import {describe, beforeEach, it, sinon, expect, angularMocks} from 'test/lib/common';
import helpers from 'test/specs/helpers';
import {GraphiteDatasource} from "../datasource";

describe('graphiteDatasource', function() {
  var ctx = new helpers.ServiceTestContext();
  var instanceSettings: any = {url: [''], name: 'graphiteProd'};

  beforeEach(angularMocks.module('grafana.core'));
  beforeEach(angularMocks.module('grafana.services'));
  beforeEach(ctx.providePhase(['backendSrv']));
  beforeEach(angularMocks.inject(function($q, $rootScope, $httpBackend, $injector) {
    ctx.$q = $q;
    ctx.$httpBackend =  $httpBackend;
    ctx.$rootScope = $rootScope;
    ctx.$injector = $injector;
    $httpBackend.when('GET', /\.html$/).respond('');
  }));

  beforeEach(function() {
    ctx.ds = ctx.$injector.instantiate(GraphiteDatasource, {instanceSettings: instanceSettings});
  });

  describe('When querying influxdb with one target using query editor target spec', function() {
    var query = {
      panelId: 3,
      rangeRaw: { from: 'now-1h', to: 'now' },
      targets: [{ target: 'prod1.count' }, {target: 'prod2.count'}],
      maxDataPoints: 500,
    };

    var results;
    var requestOptions;

    beforeEach(function() {
      ctx.backendSrv.datasourceRequest = function(options) {
        requestOptions = options;
        return ctx.$q.when({data: [{ target: 'prod1.count', datapoints: [[10, 1], [12,1]] }]});
      };

      ctx.ds.query(query).then(function(data) { results = data; });
      ctx.$rootScope.$apply();
    });

    it('should generate the correct query', function() {
      expect(requestOptions.url).to.be('/render');
    });

    it('should set unique requestId', function() {
      expect(requestOptions.requestId).to.be('graphiteProd.panelId.3');
    });

    it('should query correctly', function() {
      var params = requestOptions.data.split('&');
      expect(params).to.contain('target=prod1.count');
      expect(params).to.contain('target=prod2.count');
      expect(params).to.contain('from=-1h');
      expect(params).to.contain('until=now');
    });

    it('should exclude undefined params', function() {
      var params = requestOptions.data.split('&');
      expect(params).to.not.contain('cacheTimeout=undefined');
    });

    it('should return series list', function() {
      expect(results.data.length).to.be(1);
      expect(results.data[0].target).to.be('prod1.count');
    });

    it('should convert to millisecond resolution', function() {
      expect(results.data[0].datapoints[0][0]).to.be(10);
    });

  });

  describe('building graphite params', function() {
    it('should return empty array if no targets', function() {
      var results = ctx.ds.buildGraphiteParams({
        targets: [{}]
      });
      expect(results.length).to.be(0);
    });

    it('should uri escape targets', function() {
      var results = ctx.ds.buildGraphiteParams({
      targets: [{target: 'prod1.{test,test2}'}, {target: 'prod2.count'}]
      });
      expect(results).to.contain('target=prod1.%7Btest%2Ctest2%7D');
    });

    it('should replace target placeholder', function() {
      var results = ctx.ds.buildGraphiteParams({
      targets: [{target: 'series1'}, {target: 'series2'}, {target: 'asPercent(#A,#B)'}]
      });
      expect(results[2]).to.be('target=asPercent(series1%2Cseries2)');
    });

    it('should replace target placeholder for hidden series', function() {
      var results = ctx.ds.buildGraphiteParams({
      targets: [{target: 'series1', hide: true}, {target: 'sumSeries(#A)', hide: true}, {target: 'asPercent(#A,#B)'}]
      });
      expect(results[0]).to.be('target=' + encodeURIComponent('asPercent(series1,sumSeries(series1))'));
    });

    it('should replace target placeholder when nesting query references', function() {
      var results = ctx.ds.buildGraphiteParams({
      targets: [{target: 'series1'}, {target: 'sumSeries(#A)'}, {target: 'asPercent(#A,#B)'}]
      });
      expect(results[2]).to.be('target=' + encodeURIComponent("asPercent(series1,sumSeries(series1))"));
    });

    it('should fix wrong minute interval parameters', function() {
      var results = ctx.ds.buildGraphiteParams({
      targets: [{target: "summarize(prod.25m.count, '25m', 'sum')" }]
      });
      expect(results[0]).to.be('target=' + encodeURIComponent("summarize(prod.25m.count, '25min', 'sum')"));
    });

    it('should fix wrong month interval parameters', function() {
      var results = ctx.ds.buildGraphiteParams({
      targets: [{target: "summarize(prod.5M.count, '5M', 'sum')" }]
      });
      expect(results[0]).to.be('target=' + encodeURIComponent("summarize(prod.5M.count, '5mon', 'sum')"));
    });

    it('should ignore empty targets', function() {
      var results = ctx.ds.buildGraphiteParams({
      targets: [{target: 'series1'}, {target: ''}]
      });
      expect(results.length).to.be(2);
    });

  });

});

