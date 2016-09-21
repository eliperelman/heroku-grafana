/*! grafana - v3.1.1-1470047149 - 2016-08-01
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","../module"],function(a){var b,c;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){b.describe("grafanaSingleStat",function(){b.describe("legacy thresholds",function(){b.describe("positive thresholds",function(){var a={colorMap:["green","yellow","red"],thresholds:[20,50]};b.it("5 should return green",function(){b.expect(c.getColorForValue(a,5)).to.be("green")}),b.it("25 should return green",function(){b.expect(c.getColorForValue(a,25)).to.be("yellow")}),b.it("55 should return green",function(){b.expect(c.getColorForValue(a,55)).to.be("red")})})}),b.describe("negative thresholds",function(){var a={colorMap:["green","yellow","red"],thresholds:[0,20]};b.it("-30 should return green",function(){b.expect(c.getColorForValue(a,-30)).to.be("green")}),b.it("1 should return green",function(){b.expect(c.getColorForValue(a,1)).to.be("yellow")}),b.it("22 should return green",function(){b.expect(c.getColorForValue(a,22)).to.be("red")})}),b.describe("negative thresholds",function(){var a={colorMap:["green","yellow","red"],thresholds:[-27,20]};b.it("-30 should return green",function(){b.expect(c.getColorForValue(a,-26)).to.be("yellow")})})})}}});