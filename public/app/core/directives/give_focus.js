/*! grafana - v3.1.1-1470047149 - 2016-08-01
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["../core_module"],function(a){var b;return{setters:[function(a){b=a}],execute:function(){b["default"].directive("giveFocus",function(){return function(a,b,c){b.click(function(a){a.stopPropagation()}),a.$watch(c.giveFocus,function(a){a&&setTimeout(function(){b.focus();var a=b[0];if(a.setSelectionRange){var c=2*b.val().length;a.setSelectionRange(c,c)}},200)},!0)}}),a("default",{})}}});