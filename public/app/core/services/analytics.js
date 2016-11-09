/*! grafana - v3.1.1-1470047149 - 2016-08-01
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","../core_module"],function(a,b){"use strict";b["default"].service("googleAnalyticsSrv",["$rootScope","$location",function(a,b){var c=!0;this.init=function(){a.$on("$viewContentLoaded",function(){return c?void(c=!1):void window.ga("send","pageview",{page:b.url()})})}}]).run(["googleAnalyticsSrv",function(a){window.ga&&a.init()}])});