/*! grafana - v2.0.2 - 2015-04-22
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache License */

define([],function(){"use strict";return{create:function(){return{title:"",tags:[],style:"dark",timezone:"browser",editable:!0,failover:!1,panel_hints:!0,rows:[],pulldowns:[{type:"templating"},{type:"annotations"}],nav:[{type:"timepicker"}],time:{from:"1h",to:"now"},templating:{list:[]},refresh:"10s"}}}});