/*! grafana - v3.1.1-1470047149 - 2016-08-01
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/config","app/core/core"],function(a){var b,c,d;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){d=function(){function a(a,b,c){this.backendSrv=a,this.contextSrv=b,this.$location=c,this.getUser(),this.getUserOrgs()}return a.$inject=["backendSrv","contextSrv","$location"],a.prototype.getUser=function(){var a=this;this.backendSrv.get("/api/user").then(function(b){a.user=b,a.user.theme=b.theme||"dark"})},a.prototype.getUserOrgs=function(){var a=this;this.backendSrv.get("/api/user/orgs").then(function(b){a.orgs=b})},a.prototype.setUsingOrg=function(a){this.backendSrv.post("/api/user/using/"+a.orgId).then(function(){window.location.href=b["default"].appSubUrl+"/profile"})},a.prototype.update=function(){var a=this;this.userForm.$valid&&this.backendSrv.put("/api/user/",this.user).then(function(){a.contextSrv.user.name=a.user.name||a.user.login,a.old_theme!==a.user.theme&&(window.location.href=b["default"].appSubUrl+a.$location.path())})},a}(),a("ProfileCtrl",d),c.coreModule.controller("ProfileCtrl",d)}}});