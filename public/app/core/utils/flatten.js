/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["require","exports"],function(){function a(a,b){function c(a,h){Object.keys(a).forEach(function(i){var j=a[i],k=b.safe&&Array.isArray(j),l=Object.prototype.toString.call(j),m="[object Object]"===l,n=h?h+d+i:i;return b.maxDepth||(e=f+1),!k&&m&&Object.keys(j).length&&e>f?(++f,c(j,n)):void(g[n]=j)})}b=b||{};var d=b.delimiter||".",e=b.maxDepth||3,f=1,g={};return c(a,null),g}return a});