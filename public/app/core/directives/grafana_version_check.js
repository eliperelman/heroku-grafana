/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["../core_module"],function(a){"use strict";a.directive("grafanaVersionCheck",["$http","contextSrv",function(a,b){return{restrict:"A",link:function(c,d){"master"!==b.version&&a({method:"GET",url:"https://grafanarel.s3.amazonaws.com/latest.json"}).then(function(a){a.data&&a.data.version&&b.version!==a.data.version&&d.append('<i class="icon-info-sign"></i> <a href="http://grafana.org/download" target="_blank"> New version available: '+a.data.version+"</a>")})}}}])});