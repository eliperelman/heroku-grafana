import {describe, beforeEach, it, sinon, expect} from 'test/lib/common';

import TableModel from 'app/core/table_model';
import {TableRenderer} from '../renderer';

describe('when rendering table', () => {
  describe('given 2 columns', () => {
    var table = new TableModel();
    table.columns = [
      {text: 'Time'},
      {text: 'Value'},
      {text: 'Colored'},
      {text: 'Undefined'},
      {text: 'String'},
      {text: 'United', unit: 'bps'},
      {text: 'Sanitized'},
    ];

    var panel = {
      pageSize: 10,
      styles: [
        {
          pattern: 'Time',
          type: 'date',
          format: 'LLL'
        },
        {
          pattern: 'Value',
          type: 'number',
          unit: 'ms',
          decimals: 3,
        },
        {
          pattern: 'Colored',
          type: 'number',
          unit: 'none',
          decimals: 1,
          colorMode: 'value',
          thresholds: [50, 80],
          colors: ['green', 'orange', 'red']
        },
        {
          pattern: 'String',
          type: 'string',
        },
        {
          pattern: 'United',
          type: 'number',
          unit: 'ms',
          decimals: 2,
        },
        {
          pattern: 'Sanitized',
          type: 'string',
          sanitize: true,
        }
      ]
    };

    var sanitize = function(value) {
      return 'sanitized';
    };

    var renderer = new TableRenderer(panel, table, 'utc', sanitize);

    it('time column should be formated', () => {
      var html = renderer.renderCell(0, 1388556366666);
      expect(html).to.be('<td>2014-01-01T06:06:06+00:00</td>');
    });

    it('number column with unit specified should ignore style unit', () => {
      var html = renderer.renderCell(5, 1230);
      expect(html).to.be('<td>1.23 kbps</td>');
    });

    it('number column should be formated', () => {
      var html = renderer.renderCell(1, 1230);
      expect(html).to.be('<td>1.230 s</td>');
    });

    it('number style should ignore string values', () => {
      var html = renderer.renderCell(1, 'asd');
      expect(html).to.be('<td>asd</td>');
    });

    it('colored cell should have style', () => {
      var html = renderer.renderCell(2, 40);
      expect(html).to.be('<td style="color:green">40.0</td>');
    });

    it('colored cell should have style', () => {
      var html = renderer.renderCell(2, 55);
      expect(html).to.be('<td style="color:orange">55.0</td>');
    });

    it('colored cell should have style', () => {
      var html = renderer.renderCell(2, 85);
      expect(html).to.be('<td style="color:red">85.0</td>');
    });

    it('unformated undefined should be rendered as string', () => {
      var html = renderer.renderCell(3, 'value');
      expect(html).to.be('<td>value</td>');
    });

    it('string style with escape html should return escaped html', () => {
      var html = renderer.renderCell(4, "&breaking <br /> the <br /> row");
      expect(html).to.be('<td>&amp;breaking &lt;br /&gt; the &lt;br /&gt; row</td>');
    });

    it('undefined formater should return escaped html', () => {
      var html = renderer.renderCell(3, "&breaking <br /> the <br /> row");
      expect(html).to.be('<td>&amp;breaking &lt;br /&gt; the &lt;br /&gt; row</td>');
    });

    it('undefined value should render as -', () => {
      var html = renderer.renderCell(3, undefined);
      expect(html).to.be('<td></td>');
    });

    it('sanitized value should render as', () => {
      var html = renderer.renderCell(6, 'text <a href="http://google.com">link</a>');
      expect(html).to.be('<td>sanitized</td>');
    });
  });
});


