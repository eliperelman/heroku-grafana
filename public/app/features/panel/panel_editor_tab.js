/*! grafana - v3.1.1-1470047149 - 2016-08-01
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular"],function(a){function b(a){return a.create({scope:{ctrl:"=",editorTab:"=",index:"="},directive:function(a){var b=a.ctrl.pluginId,c=a.index;return Promise.resolve({name:"panel-editor-tab-"+b+c,fn:a.editorTab.directiveFn})}})}b.$inject=["dynamicDirectiveSrv"];var c,d;return{setters:[function(a){c=a}],execute:function(){d=c["default"].module("grafana.directives"),d.directive("panelEditorTab",b)}}});