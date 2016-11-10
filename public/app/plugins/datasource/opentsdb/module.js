/*! grafana - v4.0.0-1478693311beta1 - 2016-11-09
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["./datasource","./query_ctrl","./config_ctrl"],function(a){var b,c,d,e;return{setters:[function(a){b=a},function(a){c=a},function(a){d=a}],execute:function(){e=function(){function a(){}return a.templateUrl="partials/annotations.editor.html",a}(),a("Datasource",b.OpenTsDatasource),a("QueryCtrl",c.OpenTsQueryCtrl),a("ConfigCtrl",d.OpenTsConfigCtrl),a("AnnotationsQueryCtrl",e)}}});