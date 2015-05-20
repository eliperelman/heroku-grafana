Grafana for Heroku Deployment
=============================

Grafana binaries ready for deployment on heroku.
For completeness this repository contains both sources and binaries.

Configuration
-------------
The environment variables `GF_SERVER_HTTP_PORT` is set to `PORT` at start, so
grafana will be running on the correct port. All configuration options can
be set through environment variables on Heroku.

See: http://docs.grafana.org/installation/configuration/

License
-------
Grafana is distributed under Apache 2.0 License.
