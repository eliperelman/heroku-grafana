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

Common database setup:
```js

GF_SECURITY_ADMIN_USER=''
GF_SECURITY_ADMIN_PASSWORD=''
GF_SECURITY_SECRET_KEY=''

GF_USER_ALLOW_SIGN_UP='false'
GF_USER_ALLOW_ORG_CREATE='false'
GF_USER_AUTO_ASSIGN_ORG='true'
GF_USER_AUTO_ASSIGN_ORG_ROLE='Viewer'

GF_ANALYTICS_REPORTING_ENABLED=''
GF_ANALYTICS_GOOGLE_ANALYTICS_UA_ID=''
```


License
-------
Grafana is distributed under Apache 2.0 License.
