/*! grafana - v4.0.0-1478693311beta1 - 2016-11-09
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["test/lib/common","app/app"],function(a){var b,c;return{setters:[function(a){b=a},function(a){c=a}],execute:function(){b.describe("GrafanaApp",function(){var a=new c.GrafanaApp;b.it("can call inits",function(){b.expect(a).to.not.be(null)})})}}});