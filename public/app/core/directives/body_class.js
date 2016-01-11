/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["lodash","jquery","../core_module"],function(a,b,c){"use strict";c.directive("bodyClass",function(){return{link:function(c,d){var e;c.$on("$routeChangeSuccess",function(){b("#tooltip, .tooltip").remove()}),c.$watch("dashboard.hideControls",function(){if(c.dashboard){var a=c.dashboard.hideControls||c.playlist_active;e!==a&&(d.toggleClass("hide-controls",a),e=a)}}),c.$watch("playlistSrv",function(b){d.toggleClass("playlist-active",a.isObject(b))})}}})});