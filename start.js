var url           = require('url');
var assert        = require('assert');
var fs            = require('fs');
var child_process = require('child_process');
var path          = require('path');

// Parameters to be substituted in
var params = {};

// Create server parameters
params.PORT = process.env.PORT;

// Create database parameters
var db = url.parse(process.env.DATABASE_URL);
assert(db.protocol === 'postgres:', "Expected postgres url from DATABASE_URL");

params.DB_HOST = db.host;
params.DB_NAME = db.path.replace(/^\//, '');
params.DB_USER = db.auth.split(':')[0];
params.DB_PASS = db.auth.split(':')[1];


// Substitute parameters in
var cfgFile = fs.readFileSync('./config.ini.in').toString();
cfgFile = cfgFile.replace(/{{([^}]+)}}/g, function(text, key) {
  return params[key];
});
fs.writeFileSync('./config.ini', cfgFile);

// Start subprocess
child_process.execSync('./bin/grafana-server -c ../config.ini', {
  cwd:  path.join(__dirname, 'grafana-2.0.2'),
  env:  process.env
});