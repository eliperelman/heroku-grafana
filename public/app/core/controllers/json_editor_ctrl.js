/*! grafana - v3.1.1-1470047149 - 2016-08-01
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","../core_module"],function(a,b){"use strict";b["default"].controller("JsonEditorCtrl",["$scope",function(b){b.json=a.toJson(b.object,!0),b.canUpdate=void 0!==b.updateHandler&&b.contextSrv.isEditor,b.update=function(){var c=a.fromJson(b.json);b.updateHandler(c,b.object)}}])});