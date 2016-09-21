
import {describe, beforeEach, it, sinon, expect, angularMocks} from 'test/lib/common';
import moment from 'moment';
import angular from 'angular';
import helpers from 'test/specs/helpers';
import {ElasticDatasource} from "../datasource";

describe('ElasticDatasource', function() {
  var ctx = new helpers.ServiceTestContext();
  var instanceSettings: any = {jsonData: {}};

  beforeEach(angularMocks.module('grafana.core'));
  beforeEach(angularMocks.module('grafana.services'));
  beforeEach(ctx.providePhase(['templateSrv', 'backendSrv']));

  beforeEach(angularMocks.inject(function($q, $rootScope, $httpBackend, $injector) {
    ctx.$q = $q;
    ctx.$httpBackend =  $httpBackend;
    ctx.$rootScope = $rootScope;
    ctx.$injector = $injector;
    $httpBackend.when('GET', /\.html$/).respond('');
  }));

  function createDatasource(instanceSettings) {
    instanceSettings.jsonData = instanceSettings.jsonData || {};
    ctx.ds = ctx.$injector.instantiate(ElasticDatasource, {instanceSettings: instanceSettings});
  }

  describe('When testing datasource with index pattern', function() {
    beforeEach(function() {
      createDatasource({url: 'http://es.com', index: '[asd-]YYYY.MM.DD', jsonData: {interval: 'Daily'}});
    });

    it('should translate index pattern to current day', function() {
      var requestOptions;
      ctx.backendSrv.datasourceRequest = function(options) {
        requestOptions = options;
        return ctx.$q.when({data: {}});
      };

      ctx.ds.testDatasource();
      ctx.$rootScope.$apply();

      var today = moment.utc().format("YYYY.MM.DD");
      expect(requestOptions.url).to.be("http://es.com/asd-" + today + '/_stats');
    });
  });

  describe('When issueing metric query with interval pattern', function() {
    var requestOptions, parts, header;

    beforeEach(function() {
      createDatasource({url: 'http://es.com', index: '[asd-]YYYY.MM.DD', jsonData: {interval: 'Daily'}});

      ctx.backendSrv.datasourceRequest = function(options) {
        requestOptions = options;
        return ctx.$q.when({data: {responses: []}});
      };

      ctx.ds.query({
        range: {
          from: moment([2015, 4, 30, 10]),
          to: moment([2015, 5, 1, 10])
        },
        targets: [{ bucketAggs: [], metrics: [], query: 'escape\\:test' }]
      });

      ctx.$rootScope.$apply();

      parts = requestOptions.data.split('\n');
      header = angular.fromJson(parts[0]);
    });

    it('should translate index pattern to current day', function() {
      expect(header.index).to.eql(['asd-2015.05.30', 'asd-2015.05.31', 'asd-2015.06.01']);
    });

    it('should json escape lucene query', function() {
      var body = angular.fromJson(parts[1]);
      expect(body.query.filtered.query.query_string.query).to.be('escape\\:test');
    });
  });

  describe('When issueing document query', function() {
    var requestOptions, parts, header;

    beforeEach(function() {
      createDatasource({url: 'http://es.com', index: 'test'});

      ctx.backendSrv.datasourceRequest = function(options) {
        requestOptions = options;
        return ctx.$q.when({data: {responses: []}});
      };

      ctx.ds.query({
        range: { from: moment([2015, 4, 30, 10]), to: moment([2015, 5, 1, 10]) },
        targets: [{ bucketAggs: [], metrics: [{type: 'raw_document'}], query: 'test' }]
      });

      ctx.$rootScope.$apply();
      parts = requestOptions.data.split('\n');
      header = angular.fromJson(parts[0]);
    });

    it('should set search type to query_then_fetch', function() {
      expect(header.search_type).to.eql('query_then_fetch');
    });

    it('should set size', function() {
      var body = angular.fromJson(parts[1]);
      expect(body.size).to.be(500);
    });
  });

});
