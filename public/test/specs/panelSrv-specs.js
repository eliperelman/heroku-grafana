/*! grafana - v2.2.0-pre1 - 2015-09-02
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["helpers","features/panel/panelSrv"],function(){"use strict";describe("PanelSrv",function(){var a,b,c;beforeEach(module("grafana.services")),beforeEach(module(function(a){c={getMetricSources:sinon.spy()},a.value("datasourceSrv",c)})),beforeEach(inject(function(c,d){a=c,b=d.$new(),b.panel={targets:[]},b.dashboardViewState={registerPanel:sinon.spy()}})),describe("init",function(){beforeEach(function(){a.init(b)})})})});