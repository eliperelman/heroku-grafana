/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["angular","moment"],function(a,b){"use strict";var c=a.module("grafana.controllers");c.controller("SnapshotTopNavCtrl",["$scope",function(a){a.init=function(){var c=a.dashboardMeta;a.titleTooltip="Created: &nbsp;"+b(c.created).calendar(),c.expires&&(a.titleTooltip+="<br>Expires: &nbsp;"+b(c.expires).fromNow()+"<br>")},a.shareDashboard=function(){a.appEvent("show-modal",{src:"./app/features/dashboard/partials/shareModal.html",scope:a.$new()})}}])});