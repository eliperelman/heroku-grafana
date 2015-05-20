/*! grafana - v2.0.2 - 2015-04-22
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache License */

define(["module"],function(a){"use strict";var b=a.config&&a.config()||{};return{load:function(a,c,d){var e=c.toUrl(a);c(["text!"+a],function(a){b.registerTemplate&&b.registerTemplate(e,a),d(a)})}}});