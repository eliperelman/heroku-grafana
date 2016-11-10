/*! grafana - v4.0.0-1478693311beta1 - 2016-11-09
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","app/core/config"],function(a){"use strict";var b=a.module("grafana.controllers");b.controller("ChangePasswordCtrl",["$scope","backendSrv","$location",function(a,b,c){a.command={},a.changePassword=function(){if(a.userForm.$valid)return a.command.newPassword!==a.command.confirmNew?void a.appEvent("alert-warning",["New passwords do not match",""]):void b.put("/api/user/password",a.command).then(function(){c.path("profile")})}}])});