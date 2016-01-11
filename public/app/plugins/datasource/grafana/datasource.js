/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular"],function(a){"use strict";var b=a.module("grafana.services");b.factory("GrafanaDatasource",["$q","backendSrv",function(a,b){function c(){}return c.prototype.query=function(a){return b.get("/api/metrics/test",{from:a.range.from.valueOf(),to:a.range.to.valueOf(),maxDataPoints:a.maxDataPoints})},c.prototype.metricFindQuery=function(){return a.when([])},c}])});