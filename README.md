Grafana for Heroku Deployment
=============================

Grafana binaries ready for deployment on heroku with postgres add-on.
For completeness this repository contains both sources and binaries.

Configuration
-------------
The `start.js` script will setup database and server port configuration using
`DATABASE_URL` and `PORT` environment variables.

All other configuration parameters can  be specified using environment variables
see: http://docs.grafana.org/installation/configuration/

Common configuration environment variables:
```bash
GF_SECURITY_ADMIN_USER=''               # Admin username
GF_SECURITY_ADMIN_PASSWORD=''           # Admin password
GF_SECURITY_SECRET_KEY=''               # Secret for signing

GF_USER_ALLOW_SIGN_UP='false'           # Allow users to sign-up
GF_USER_ALLOW_ORG_CREATE='false'        # Allow users to create new orgs
GF_USER_AUTO_ASSIGN_ORG='true'          # Auto-assign users to default org
GF_USER_AUTO_ASSIGN_ORG_ROLE='Viewer'   # Set default role to viewer

GF_ANALYTICS_GOOGLE_ANALYTICS_UA_ID=''  # Google Analytics tracking code
```

License
-------
Grafana is distributed under Apache 2.0 License.
