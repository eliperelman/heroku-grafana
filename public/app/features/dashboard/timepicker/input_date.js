/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","lodash","moment"],function(a,b,c){"use strict";a.module("grafana.directives").directive("inputDatetime",function(){return{restrict:"A",require:"ngModel",link:function(a,b,d,e){var f="YYYY-MM-DD HH:mm:ss",g=function(b){if(-1!==b.indexOf("now"))return b;var d;return d=a.ctrl.isUtc?c.utc(b,f):c(b,f),d.isValid()?d:void 0},h=function(a){return c.isMoment(a)?a.format(f):a};e.$parsers.push(g),e.$formatters.push(h)}}})});