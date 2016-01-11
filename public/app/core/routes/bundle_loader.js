/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["require","exports"],function(a,b){var c=function(){function b(b){var c=this;this.lazy=["$q","$route","$rootScope",function(d){return c.loadingDefer?c.loadingDefer.promise:(c.loadingDefer=d.defer(),a([b],function(){c.loadingDefer.resolve()}),c.loadingDefer.promise)}]}return b}();b.BundleLoader=c});