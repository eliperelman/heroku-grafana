/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["require","exports","test/lib/common","app/core/utils/flatten"],function(a,b,c,d){c.describe("flatten",function(){c.it("should return flatten object",function(){var a=d({level1:"level1-value",deeper:{level2:"level2-value",deeper:{level3:"level3-value"}}},null);c.expect(a.level1).to.be("level1-value"),c.expect(a["deeper.level2"]).to.be("level2-value"),c.expect(a["deeper.deeper.level3"]).to.be("level3-value")})})});