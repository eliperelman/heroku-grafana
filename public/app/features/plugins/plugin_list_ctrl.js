/*! grafana - v3.1.1-1470047149 - 2016-08-01
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular"],function(a){var b,c;return{setters:[function(a){b=a}],execute:function(){c=function(){function a(a,b){var c=this;this.backendSrv=a,this.tabIndex=0;var d=b.search().type||"panel";switch(d){case"datasource":this.tabIndex=1;break;case"app":this.tabIndex=2;break;case"panel":default:this.tabIndex=0}this.backendSrv.get("api/plugins",{embedded:0,type:d}).then(function(a){c.plugins=a})}return a.$inject=["backendSrv","$location"],a}(),a("PluginListCtrl",c),b["default"].module("grafana.controllers").controller("PluginListCtrl",c)}}});