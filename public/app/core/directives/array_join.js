/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["require","exports","lodash","../core_module"],function(a,b,c,d){function e(){"use strict";return{restrict:"A",require:"ngModel",link:function(a,b,d,e){function f(a){return(a||"").split(",")}function g(a){return c.isArray(a)?(a||"").join(","):a}e.$parsers.push(f),e.$formatters.push(g)}}}b.arrayJoin=e,d.directive("arrayJoin",e)});