import {describe, beforeEach, it, sinon, expect, angularMocks} from 'test/lib/common';

import 'app/features/dashboard/dashboardSrv';
import {DynamicDashboardSrv} from '../dynamic_dashboard_srv';

function dynamicDashScenario(desc, func)  {

  describe(desc, function() {
    var ctx: any = {};

    ctx.setup = function (setupFunc) {

      beforeEach(angularMocks.module('grafana.services'));
      beforeEach(angularMocks.module(function($provide) {
        $provide.value('contextSrv', {
          user: { timezone: 'utc'}
        });
      }));

      beforeEach(angularMocks.inject(function(dashboardSrv) {
        ctx.dashboardSrv = dashboardSrv;
        var model = {
          rows: [],
          templating: { list: [] }
        };

        setupFunc(model);
        ctx.dash = ctx.dashboardSrv.create(model);
        ctx.dynamicDashboardSrv = new DynamicDashboardSrv();
        ctx.dynamicDashboardSrv.init(ctx.dash);
        ctx.rows = ctx.dash.rows;
      }));
    };

    func(ctx);
  });
}

dynamicDashScenario('given dashboard with panel repeat', function(ctx) {
  ctx.setup(function(dash) {
    dash.rows.push({
      panels: [{id: 2, repeat: 'apps'}]
    });
    dash.templating.list.push({
      name: 'apps',
      current: {
        text: 'se1, se2, se3',
        value: ['se1', 'se2', 'se3']
      },
      options: [
        {text: 'se1', value: 'se1', selected: true},
        {text: 'se2', value: 'se2', selected: true},
        {text: 'se3', value: 'se3', selected: true},
        {text: 'se4', value: 'se4', selected: false}
      ]
    });
  });

  it('should repeat panel one time', function() {
    expect(ctx.rows[0].panels.length).to.be(3);
  });

  it('should mark panel repeated', function() {
    expect(ctx.rows[0].panels[0].repeat).to.be('apps');
    expect(ctx.rows[0].panels[1].repeatPanelId).to.be(2);
  });

  it('should set scopedVars on panels', function() {
    expect(ctx.rows[0].panels[0].scopedVars.apps.value).to.be('se1');
    expect(ctx.rows[0].panels[1].scopedVars.apps.value).to.be('se2');
    expect(ctx.rows[0].panels[2].scopedVars.apps.value).to.be('se3');
  });

  describe('After a second iteration', function() {
    var repeatedPanelAfterIteration1;

    beforeEach(function() {
      repeatedPanelAfterIteration1 = ctx.rows[0].panels[1];
      ctx.rows[0].panels[0].fill = 10;
      ctx.dynamicDashboardSrv.update(ctx.dash);
    });

    it('should have reused same panel instances', function() {
      expect(ctx.rows[0].panels[1]).to.be(repeatedPanelAfterIteration1);
    });

    it('reused panel should copy properties from source', function() {
      expect(ctx.rows[0].panels[1].fill).to.be(10);
    });

    it('should have same panel count', function() {
      expect(ctx.rows[0].panels.length).to.be(3);
    });
  });

  describe('After a second iteration and selected values reduced', function() {
    beforeEach(function() {
      ctx.dash.templating.list[0].options[1].selected = false;

      ctx.dynamicDashboardSrv.update(ctx.dash);
    });

    it('should clean up repeated panel', function() {
      expect(ctx.rows[0].panels.length).to.be(2);
    });
  });

  describe('After a second iteration and panel repeat is turned off', function() {
    beforeEach(function() {
      ctx.rows[0].panels[0].repeat = null;
      ctx.dynamicDashboardSrv.update(ctx.dash);
    });

    it('should clean up repeated panel', function() {
      expect(ctx.rows[0].panels.length).to.be(1);
    });

    it('should remove scoped vars from reused panel', function() {
      expect(ctx.rows[0].panels[0].scopedVars).to.be.empty();
    });
  });

});

dynamicDashScenario('given dashboard with row repeat', function(ctx) {
  ctx.setup(function(dash) {
    dash.rows.push({
      repeat: 'servers',
      panels: [{id: 2}]
    });
    dash.rows.push({panels: []});
    dash.templating.list.push({
      name: 'servers',
      current: {
        text: 'se1, se2',
        value: ['se1', 'se2']
      },
      options: [
        {text: 'se1', value: 'se1', selected: true},
        {text: 'se2', value: 'se2', selected: true},
      ]
    });
  });

  it('should repeat row one time', function() {
    expect(ctx.rows.length).to.be(3);
  });

  it('should keep panel ids on first row', function() {
    expect(ctx.rows[0].panels[0].id).to.be(2);
  });

  it('should keep first row as repeat', function() {
    expect(ctx.rows[0].repeat).to.be('servers');
  });

  it('should clear repeat field on repeated row', function() {
    expect(ctx.rows[1].repeat).to.be(null);
  });

  it('should add scopedVars to rows', function() {
    expect(ctx.rows[0].scopedVars.servers.value).to.be('se1');
    expect(ctx.rows[1].scopedVars.servers.value).to.be('se2');
  });

  it('should generate a repeartRowId based on repeat row index', function() {
    expect(ctx.rows[1].repeatRowId).to.be(1);
  });

  it('should set scopedVars on row panels', function() {
    expect(ctx.rows[0].panels[0].scopedVars.servers.value).to.be('se1');
    expect(ctx.rows[1].panels[0].scopedVars.servers.value).to.be('se2');
  });

  describe('After a second iteration', function() {
    var repeatedRowAfterFirstIteration;

    beforeEach(function() {
      repeatedRowAfterFirstIteration = ctx.rows[1];
      ctx.rows[0].height = 500;
      ctx.dynamicDashboardSrv.update(ctx.dash);
    });

    it('should still only have 2 rows', function() {
      expect(ctx.rows.length).to.be(3);
    });

    it.skip('should have updated props from source', function() {
      expect(ctx.rows[1].height).to.be(500);
    });

    it('should reuse row instance', function() {
      expect(ctx.rows[1]).to.be(repeatedRowAfterFirstIteration);
    });
  });

  describe('After a second iteration and selected values reduced', function() {
    beforeEach(function() {
      ctx.dash.templating.list[0].options[1].selected = false;
      ctx.dynamicDashboardSrv.update(ctx.dash);
    });

    it('should remove repeated second row', function() {
      expect(ctx.rows.length).to.be(2);
    });
  });
});

dynamicDashScenario('given dashboard with row repeat and panel repeat', function(ctx) {
  ctx.setup(function(dash) {
    dash.rows.push({
      repeat: 'servers',
      panels: [{id: 2, repeat: 'metric'}]
    });
    dash.templating.list.push({
      name: 'servers',
      current: { text: 'se1, se2', value: ['se1', 'se2'] },
      options: [
        {text: 'se1', value: 'se1', selected: true},
        {text: 'se2', value: 'se2', selected: true},
      ]
    });
    dash.templating.list.push({
      name: 'metric',
      current: { text: 'm1, m2', value: ['m1', 'm2'] },
      options: [
        {text: 'm1', value: 'm1', selected: true},
        {text: 'm2', value: 'm2', selected: true},
      ]
    });
  });

  it('should repeat row one time', function() {
    expect(ctx.rows.length).to.be(2);
  });

  it('should repeat panel on both rows', function() {
    expect(ctx.rows[0].panels.length).to.be(2);
    expect(ctx.rows[1].panels.length).to.be(2);
  });

  it('should keep panel ids on first row', function() {
    expect(ctx.rows[0].panels[0].id).to.be(2);
  });

  it('should mark second row as repeated', function() {
    expect(ctx.rows[0].repeat).to.be('servers');
  });

  it('should clear repeat field on repeated row', function() {
    expect(ctx.rows[1].repeat).to.be(null);
  });

  it('should generate a repeartRowId based on repeat row index', function() {
    expect(ctx.rows[1].repeatRowId).to.be(1);
  });

  it('should set scopedVars on row panels', function() {
    expect(ctx.rows[0].panels[0].scopedVars.servers.value).to.be('se1');
    expect(ctx.rows[1].panels[0].scopedVars.servers.value).to.be('se2');
  });

});

