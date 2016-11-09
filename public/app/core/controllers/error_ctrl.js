/*! grafana - v3.1.1-1470047149 - 2016-08-01
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","../core_module"],function(a,b){"use strict";b["default"].controller("ErrorCtrl",["$scope","contextSrv",function(a,b){var c=b.sidemenu;b.sidemenu=!1,a.$on("$destroy",function(){a.contextSrv.sidemenu=c})}])});