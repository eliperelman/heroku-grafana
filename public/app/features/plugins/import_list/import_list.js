/*! grafana - v3.1.1-1470047149 - 2016-08-01
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/core_module","app/core/app_events"],function(a){function b(){return{restrict:"E",templateUrl:"public/app/features/plugins/import_list/import_list.html",controller:f,bindToController:!0,controllerAs:"ctrl",scope:{plugin:"=",datasource:"="}}}var c,d,e,f;return a("dashboardImportList",b),{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(a,b,c,d){var f=this;this.$http=b,this.backendSrv=c,this.$rootScope=d,this.dashboards=[],c.get("/api/plugins/"+this.plugin.id+"/dashboards").then(function(a){f.dashboards=a}),e["default"].on("dashboard-list-import-all",this.importAll.bind(this),a)}return a.$inject=["$scope","$http","backendSrv","$rootScope"],a.prototype.importAll=function(a){return this.importNext(0).then(function(){a.resolve("All dashboards imported")})["catch"](function(b){a.reject(b)})},a.prototype.importNext=function(a){var b=this;return this["import"](this.dashboards[a],!0).then(function(){if(a+1<b.dashboards.length)return new Promise(function(c){setTimeout(function(){b.importNext(a+1).then(function(){c()})},500)})})},a.prototype["import"]=function(a,b){var d=this,e={pluginId:this.plugin.id,path:a.path,overwrite:b,inputs:[]};return this.datasource&&e.inputs.push({name:"*",type:"datasource",pluginId:this.datasource.type,value:this.datasource.name}),this.backendSrv.post("/api/dashboards/import",e).then(function(b){d.$rootScope.appEvent("alert-success",["Dashboard Imported",a.title]),c["default"].extend(a,b)})},a.prototype.remove=function(a){var b=this;this.backendSrv["delete"]("/api/dashboards/"+a.importedUri).then(function(){b.$rootScope.appEvent("alert-success",["Dashboard Deleted",a.title]),a.imported=!1})},a}(),a("DashImportListCtrl",f),d["default"].directive("dashboardImportList",b)}}});