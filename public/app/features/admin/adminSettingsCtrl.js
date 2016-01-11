/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular"],function(a){"use strict";var b=a.module("grafana.controllers");b.controller("AdminSettingsCtrl",["$scope","backendSrv",function(a,b){a.init=function(){a.getUsers()},a.getUsers=function(){b.get("/api/admin/settings").then(function(b){a.settings=b})},a.init()}])});