/*! grafana - v3.1.1-1470047149 - 2016-08-01
 * Copyright (c) 2016 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash"],function(a){function b(a){var b="sep=;\nSeries;Time;Value\n";f["default"].each(a,function(a){f["default"].each(a.datapoints,function(c){b+=a.alias+";"+new Date(c[1]).toISOString()+";"+c[0]+"\n"})}),e(b,"grafana_data_export.csv")}function c(a){var b="sep=;\nTime;";f["default"].each(a,function(a){b+=a.alias+";"}),b=b.substring(0,b.length-1),b+="\n";var c=[[]],d=1;f["default"].each(a,function(a){var b=0;c.push([]),f["default"].each(a.datapoints,function(a){c[0][b]=new Date(a[1]).toISOString(),c[d][b]=a[0],b++}),d++});for(var g=0;g<c[0].length;g++){b+=c[0][g]+";";for(var h=1;h<c.length;h++)b+=c[h][g]+";";b=b.substring(0,b.length-1),b+="\n"}e(b,"grafana_data_export.csv")}function d(a){var b="";f["default"].each(a.columns,function(a){b+=a.text+";"}),b+="\n",f["default"].each(a.rows,function(a){f["default"].each(a,function(a){b+=a+";"}),b+="\n"}),e(b,"grafana_data_export.csv")}function e(a,b){var c=new Blob([a],{type:"text/csv;charset=utf-8"});window.saveAs(c,b)}var f;return a("exportSeriesListToCsv",b),a("exportSeriesListToCsvColumns",c),a("exportTableDataToCsv",d),a("saveSaveBlob",e),{setters:[function(a){f=a}],execute:function(){}}});