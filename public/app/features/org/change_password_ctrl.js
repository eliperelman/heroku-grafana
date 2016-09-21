/*! grafana - v3.1.1-1470047149 - 2016-08-01
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","app/core/config"],function(a){"use strict";var b=a.module("grafana.controllers");b.controller("ChangePasswordCtrl",["$scope","backendSrv","$location",function(a,b,c){a.command={},a.changePassword=function(){if(a.userForm.$valid)return a.command.newPassword!==a.command.confirmNew?void a.appEvent("alert-warning",["New passwords do not match",""]):void b.put("/api/user/password",a.command).then(function(){c.path("profile")})}}])});