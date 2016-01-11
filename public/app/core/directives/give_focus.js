/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["require","exports","../core_module"],function(a,b,c){c.directive("giveFocus",function(){return function(a,b,c){b.click(function(a){a.stopPropagation()}),a.$watch(c.giveFocus,function(a){a&&setTimeout(function(){b.focus();var a=b[0];if(a.setSelectionRange){var c=2*b.val().length;a.setSelectionRange(c,c)}},200)},!0)}}),b["default"]={}});