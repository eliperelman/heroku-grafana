/*! grafana - v3.1.1-1470047149 - 2016-08-01
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","test/lib/common","../response_parser"],function(a){var b,c,d,e=this;return{setters:[function(a){b=a},function(a){c=a},function(a){d=a}],execute:function(){c.describe("influxdb response parser",function(){e.parser=new d["default"],c.describe("SHOW TAG response",function(){var a='SHOW TAG KEYS FROM "cpu"',d={results:[{series:[{name:"cpu",columns:["tagKey"],values:[["datacenter"],["hostname"],["source"]]}]}]},f=e.parser.parse(a,d);c.it("expects three results",function(){c.expect(b["default"].size(f)).to.be(3)})}),c.describe("SHOW TAG VALUES response",function(){var a='SHOW TAG VALUES FROM "cpu" WITH KEY = "hostname"';c.describe("response from 0.10.0",function(){var d={results:[{series:[{name:"hostnameTagValues",columns:["hostname"],values:[["server1"],["server2"],["server2"]]}]}]},f=e.parser.parse(a,d);c.it("should get two responses",function(){c.expect(b["default"].size(f)).to.be(2),c.expect(f[0].text).to.be("server1"),c.expect(f[1].text).to.be("server2")})}),c.describe("response from 0.12.0",function(){var d={results:[{series:[{name:"cpu",columns:["key","value"],values:[["source","site"],["source","api"]]},{name:"logins",columns:["key","value"],values:[["source","site"],["source","webapi"]]}]}]},f=e.parser.parse(a,d);c.it("should get two responses",function(){c.expect(b["default"].size(f)).to.be(3),c.expect(f[0].text).to.be("site"),c.expect(f[1].text).to.be("api"),c.expect(f[2].text).to.be("webapi")})})}),c.describe("SHOW FIELD response",function(){var a='SHOW FIELD KEYS FROM "cpu"';c.describe("response from 0.10.0",function(){var d={results:[{series:[{name:"measurements",columns:["name"],values:[["cpu"],["derivative"],["logins.count"],["logs"],["payment.ended"],["payment.started"]]}]}]},f=e.parser.parse(a,d);c.it("should get two responses",function(){c.expect(b["default"].size(f)).to.be(6)})}),c.describe("response from 0.11.0",function(){var d={results:[{series:[{name:"cpu",columns:["fieldKey"],values:[["value"]]}]}]},f=e.parser.parse(a,d);c.it("should get two responses",function(){c.expect(b["default"].size(f)).to.be(1)})})})})}}});