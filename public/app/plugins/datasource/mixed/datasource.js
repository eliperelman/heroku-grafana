/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash"],function(a,b){"use strict";var c=a.module("grafana.services");c.factory("MixedDatasource",["$q","backendSrv","datasourceSrv",function(c,d,e){function f(){}return f.prototype.query=function(d){var f=b.groupBy(d.targets,"datasource"),g=b.map(f,function(b){return e.get(b[0].datasource).then(function(c){var e=a.copy(d);return e.targets=b,c.query(e)})});return c.all(g).then(function(a){return{data:b.flatten(b.pluck(a,"data"))}})},f}])});