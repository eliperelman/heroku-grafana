/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular"],function(a){"use strict";var b=a.module("grafana.directives");b.directive("metricQueryEditorCloudwatch",function(){return{controller:"CloudWatchQueryCtrl",templateUrl:"app/plugins/datasource/cloudwatch/partials/query.editor.html"}})});