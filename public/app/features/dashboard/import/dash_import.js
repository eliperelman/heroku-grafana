/*! grafana - v3.1.1-1470047149 - 2016-08-01
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["app/core/core_module","app/core/config","lodash"],function(a){function b(){return{restrict:"E",templateUrl:"public/app/features/dashboard/import/dash_import.html",controller:f,bindToController:!0,controllerAs:"ctrl"}}var c,d,e,f;return a("dashImportDirective",b),{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){f=function(){function a(a,b,c,d){this.backendSrv=a,this.$location=b,this.$scope=c,this.$routeParams=d,this.step=1,this.nameExists=!1,d.gnetId&&(this.gnetUrl=d.gnetId,this.checkGnetDashboard())}return a.$inject=["backendSrv","$location","$scope","$routeParams"],a.prototype.onUpload=function(a){if(this.dash=a,this.dash.id=null,this.step=2,this.inputs=[],this.dash.__inputs)for(var b=0,c=this.dash.__inputs;b<c.length;b++){var d=c[b],e={name:d.name,label:d.label,info:d.description,value:d.value,type:d.type,pluginId:d.pluginId,options:[]};"datasource"===d.type?this.setDatasourceOptions(d,e):e.info||(e.info="Specify a string constant"),this.inputs.push(e)}this.inputsValid=0===this.inputs.length,this.titleChanged()},a.prototype.setDatasourceOptions=function(a,b){var c=e["default"].filter(d["default"].datasources,function(b){return b.type===a.pluginId});0===c.length?b.info="No data sources of type "+a.pluginName+" found":b.info||(b.info="Select a "+a.pluginName+" data source"),b.options=c.map(function(a){return{text:a.name,value:a.name}})},a.prototype.inputValueChanged=function(){this.inputsValid=!0;for(var a=0,b=this.inputs;a<b.length;a++){var c=b[a];c.value||(this.inputsValid=!1)}},a.prototype.titleChanged=function(){var a=this;this.backendSrv.search({query:this.dash.title}).then(function(b){a.nameExists=!1;for(var c=0;c<b.length;c++){var d=b[c];if(a.dash.title===d.title){a.nameExists=!0;break}}})},a.prototype.saveDashboard=function(){var a=this,b=this.inputs.map(function(a){return{name:a.name,type:a.type,pluginId:a.pluginId,value:a.value}});return this.backendSrv.post("api/dashboards/import",{dashboard:this.dash,overwrite:!0,inputs:b}).then(function(b){a.$location.url("dashboard/"+b.importedUri),a.$scope.dismiss()})},a.prototype.loadJsonText=function(){try{this.parseError="";var a=JSON.parse(this.jsonText);this.onUpload(a)}catch(b){return console.log(b),void(this.parseError=b.message)}},a.prototype.checkGnetDashboard=function(){var a=this;this.gnetError="";var b,c=/(^\d+$)|dashboards\/(\d+)/.exec(this.gnetUrl);return c&&c[1]?b=c[1]:c&&c[2]?b=c[2]:this.gnetError="Could not find dashboard",this.backendSrv.get("api/gnet/dashboards/"+b).then(function(b){a.gnetInfo=b,b.json.gnetId=b.id,a.onUpload(b.json)})["catch"](function(b){b.isHandled=!0,a.gnetError=b.data.message||b})},a.prototype.back=function(){this.gnetUrl="",this.step=1,this.gnetError="",this.gnetInfo=""},a}(),a("DashImportCtrl",f),c["default"].directive("dashImport",b)}}});