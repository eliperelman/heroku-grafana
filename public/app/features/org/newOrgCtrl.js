/*! grafana - v4.0.0-1478693311beta1 - 2016-11-09
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","app/core/config"],function(a,b){"use strict";var c=a.module("grafana.controllers");c.controller("NewOrgCtrl",["$scope","$http","backendSrv",function(a,c,d){a.newOrg={name:""},a.createOrg=function(){d.post("/api/orgs/",a.newOrg).then(function(a){d.post("/api/user/using/"+a.orgId).then(function(){window.location.href=b.appSubUrl+"/org"})})}}])});