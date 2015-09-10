/*! grafana - v2.2.0-pre1 - 2015-09-02
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

module.exports=function(a){"use strict";a.set({basePath:"../../",frameworks:["mocha","requirejs","expect","sinon"],files:["public/test/test-main.js",{pattern:"public/app/**/*.js",included:!1},{pattern:"public/vendor/**/*.js",included:!1},{pattern:"public/test/**/*.js",included:!1},{pattern:"public/**/*.js",included:!1}],exclude:[],reporters:["dots"],port:9876,colors:!0,logLevel:a.LOG_INFO,autoWatch:!0,browsers:["PhantomJS"],captureTimeout:6e4,singleRun:!0})};