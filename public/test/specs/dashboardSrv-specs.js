/*! grafana - v3.1.1-1470047149 - 2016-08-01
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

define(["app/features/dashboard/dashboardSrv"],function(){"use strict";describe("dashboardSrv",function(){var a;beforeEach(module("grafana.services")),beforeEach(module(function(a){a.value("contextSrv",{})})),beforeEach(inject(function(b){a=b})),describe("when creating new dashboard with defaults only",function(){var b;beforeEach(function(){b=a.create({},{})}),it("should have title",function(){expect(b.title).to.be("No Title")}),it("should have meta",function(){expect(b.meta.canSave).to.be(!0),expect(b.meta.canShare).to.be(!0)}),it("should have default properties",function(){expect(b.rows.length).to.be(0)})}),describe("when getting next panel id",function(){var b;beforeEach(function(){b=a.create({rows:[{panels:[{id:5}]}]})}),it("should return max id + 1",function(){expect(b.getNextPanelId()).to.be(6)})}),describe("row and panel manipulation",function(){var b;beforeEach(function(){b=a.create({})}),it("row span should sum spans",function(){var a=b.rowSpan({panels:[{span:2},{span:3}]});expect(a).to.be(5)}),it("adding default should split span in half",function(){b.rows=[{panels:[{span:12,id:7}]}],b.addPanel({span:4},b.rows[0]),expect(b.rows[0].panels[0].span).to.be(6),expect(b.rows[0].panels[1].span).to.be(6),expect(b.rows[0].panels[1].id).to.be(8)}),it("duplicate panel should try to add it to same row",function(){var a={span:4,attr:"123",id:10};b.rows=[{panels:[a]}],b.duplicatePanel(a,b.rows[0]),expect(b.rows[0].panels[0].span).to.be(4),expect(b.rows[0].panels[1].span).to.be(4),expect(b.rows[0].panels[1].attr).to.be("123"),expect(b.rows[0].panels[1].id).to.be(11)}),it("duplicate panel should remove repeat data",function(){var a={span:4,attr:"123",id:10,repeat:"asd",scopedVars:{test:"asd"}};b.rows=[{panels:[a]}],b.duplicatePanel(a,b.rows[0]),expect(b.rows[0].panels[1].repeat).to.be(void 0),expect(b.rows[0].panels[1].scopedVars).to.be(void 0)})}),describe("when creating dashboard with editable false",function(){var b;beforeEach(function(){b=a.create({editable:!1})}),it("should set editable false",function(){expect(b.editable).to.be(!1)})}),describe("when creating dashboard with old schema",function(){var b,c,d,e;beforeEach(function(){b=a.create({services:{filter:{time:{from:"now-1d",to:"now"},list:[{}]}},pulldowns:[{type:"filtering",enable:!0},{type:"annotations",enable:!0,annotations:[{name:"old"}]}],rows:[{panels:[{type:"graph",legend:!0,aliasYAxis:{test:2},y_formats:["kbyte","ms"],grid:{min:1,max:10,rightMin:5,rightMax:15,leftLogBase:1,rightLogBase:2},leftYAxisLabel:"left label",targets:[{refId:"A"},{}]},{type:"singlestat",legend:!0,thresholds:"10,20,30",aliasYAxis:{test:2},grid:{min:1,max:10},targets:[{refId:"A"},{}]},{type:"table",legend:!0,styles:[{thresholds:["10","20","30"]},{thresholds:["100","200","300"]}],targets:[{refId:"A"},{}]}]}]}),c=b.rows[0].panels[0],d=b.rows[0].panels[1],e=b.rows[0].panels[2]}),it("should have title",function(){expect(b.title).to.be("No Title")}),it("should have panel id",function(){expect(c.id).to.be(1)}),it("should move time and filtering list",function(){expect(b.time.from).to.be("now-1d"),expect(b.templating.list[0].allFormat).to.be("glob")}),it("graphite panel should change name too graph",function(){expect(c.type).to.be("graph")}),it("single stat panel should have two thresholds",function(){expect(d.thresholds).to.be("20,30")}),it("queries without refId should get it",function(){expect(c.targets[1].refId).to.be("B")}),it("update legend setting",function(){expect(c.legend.show).to.be(!0)}),it("move aliasYAxis to series override",function(){expect(c.seriesOverrides[0].alias).to.be("test"),expect(c.seriesOverrides[0].yaxis).to.be(2)}),it("should move pulldowns to new schema",function(){expect(b.annotations.list[0].name).to.be("old")}),it("table panel should only have two thresholds values",function(){expect(e.styles[0].thresholds[0]).to.be("20"),expect(e.styles[0].thresholds[1]).to.be("30"),expect(e.styles[1].thresholds[0]).to.be("200"),expect(e.styles[1].thresholds[1]).to.be("300")}),it("graph grid to yaxes options",function(){expect(c.yaxes[0].min).to.be(1),expect(c.yaxes[0].max).to.be(10),expect(c.yaxes[0].format).to.be("kbyte"),expect(c.yaxes[0].label).to.be("left label"),expect(c.yaxes[0].logBase).to.be(1),expect(c.yaxes[1].min).to.be(5),expect(c.yaxes[1].max).to.be(15),expect(c.yaxes[1].format).to.be("ms"),expect(c.yaxes[1].logBase).to.be(2),expect(c.grid.rightMax).to.be(void 0),expect(c.grid.rightLogBase).to.be(void 0),expect(c.y_formats).to.be(void 0)}),it("dashboard schema version should be set to latest",function(){expect(b.schemaVersion).to.be(12)})}),describe("when creating dashboard model with missing list for annoations or templating",function(){var b;beforeEach(function(){b=a.create({annotations:{enable:!0},templating:{enable:!0}})}),it("should add empty list",function(){expect(b.annotations.list.length).to.be(0),expect(b.templating.list.length).to.be(0)})}),describe("Given editable false dashboard",function(){var b;beforeEach(function(){b=a.create({editable:!1})}),it("Should set meta canEdit and canSave to false",function(){expect(b.meta.canSave).to.be(!1),expect(b.meta.canEdit).to.be(!1)}),it("getSaveModelClone should remove meta",function(){var a=b.getSaveModelClone();expect(a.meta).to.be(void 0)})}),describe("when loading dashboard with old influxdb query schema",function(){var b,c;beforeEach(function(){b=a.create({rows:[{panels:[{type:"graph",grid:{},yaxes:[{},{}],targets:[{alias:"$tag_datacenter $tag_source $col",column:"value",measurement:"logins.count",fields:[{func:"mean",name:"value",mathExpr:"*2",asExpr:"value"},{name:"one-minute",func:"mean",mathExpr:"*3",asExpr:"one-minute"}],tags:[],fill:"previous","function":"mean",groupBy:[{interval:"auto",type:"time"},{key:"source",type:"tag"},{type:"tag",key:"datacenter"}]}]}]}]}),c=b.rows[0].panels[0].targets[0]}),it("should update query schema",function(){expect(c.fields).to.be(void 0),expect(c.select.length).to.be(2),expect(c.select[0].length).to.be(4),expect(c.select[0][0].type).to.be("field"),expect(c.select[0][1].type).to.be("mean"),expect(c.select[0][2].type).to.be("math"),expect(c.select[0][3].type).to.be("alias")})}),describe("when creating dashboard model with missing list for annoations or templating",function(){var b;beforeEach(function(){b=a.create({annotations:{enable:!0},templating:{enable:!0}})}),it("should add empty list",function(){expect(b.annotations.list.length).to.be(0),expect(b.templating.list.length).to.be(0)})}),describe("Formatting epoch timestamp when timezone is set as utc",function(){var b;beforeEach(function(){b=a.create({timezone:"utc"})}),it("Should format timestamp with second resolution by default",function(){expect(b.formatDate(123456789e4)).to.be("2009-02-13 23:31:30")}),it("Should format timestamp with second resolution even if second format is passed as parameter",function(){expect(b.formatDate(1234567890007,"YYYY-MM-DD HH:mm:ss")).to.be("2009-02-13 23:31:30")}),it("Should format timestamp with millisecond resolution if format is passed as parameter",function(){expect(b.formatDate(1234567890007,"YYYY-MM-DD HH:mm:ss.SSS")).to.be("2009-02-13 23:31:30.007")})})})});