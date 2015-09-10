/*! grafana - v2.2.0-pre1 - 2015-09-02
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

var jshint=require("gulp-jshint"),stylish=require("jshint-stylish"),gulp=require("gulp");gulp.task("lint",function(){return gulp.src("./draganddrop.js").pipe(jshint()).pipe(jshint.reporter(stylish))}),gulp.task("default",["lint"]);