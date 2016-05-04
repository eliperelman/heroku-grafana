# heroku-grafana

Run Grafana on Heroku

## Automated Install

Heroku-Grafana provides an automatic deployment script which will perform all of the following steps for you.

Should you wish to use this script, simply invoke it as follows:

```./deploy.sh <app name>
```

Otherwise, please follow these steps to manually deploy Heroku-Grafana.


## Manual Install

#### Init

1. Install the [Heroku Toolbelt](https://toolbelt.heroku.com/)
2. Fork and clone this repo
3. Create the app, e.g. `heroku create`
4. Set the buildpack to the [Null buildpack](https://github.com/ryandotsmith/null-buildpack):

```sh
heroku buildpacks:add http://github.com/ryandotsmith/null-buildpack.git
```

#### Database Setup

Heroku dynos use an ephemeral filesystem, and as such will not persist changes between deployments. Specifically for Grafana, this means the database engine cannot be sqlite, but instead a Heroku database add-on. Here we are using the Postgres:

1. Add on a database: `heroku addons:create heroku-postgresql:hobby-dev`
2. View the full Postgres connection URL: `heroku config:get DATABASE_URL`
3. Create Grafana environment variables based on Postgres URL:

```sh
# Postgres URL format:
# postgres://<username>:<password>@<host>/<dbname>
heroku config:set GF_DATABASE_TYPE=postgres
heroku config:set GF_DATABASE_HOST=<host>
heroku config:set GF_DATABASE_NAME=<dbname>
heroku config:set GF_DATABASE_USER=<username>
heroku config:set GF_DATABASE_PASSWORD=<password>
heroku config:set GF_DATABASE_SSL_MODE=require
```

Grafana also needs some configuration to use Postgres as the session provider.

First, you'll need to connect to your Postgres DB to create the session table:

```sh
# only swap out for values where <> is below
heroku pg:psql --app <app-name> DATABASE_URL

\connect <dbname>
CREATE TABLE session (key CHAR(16) NOT NULL, data bytea, expiry INT NOT NULL, PRIMARY KEY (key));

# use \dt to ensure the session table exists
\dt
```

Now configure Grafana to use Postgres as the session store:

```sh
heroku config:set GF_SESSION_PROVIDER=postgres
heroku config:set GF_SESSION_PROVIDER_CONFIG="$(heroku pg:credentials DATABASE | grep dbname | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')"
```

#### Deploy

1. Deploy: `git push heroku master`
2. View the running app: `heroku open`

## Configuration

Most changes can be made to Grafana through the use of environment variables. It is recommended to change the Grafana security at set-up time:

```sh
heroku config:set GF_SECURITY_ADMIN_USER=<admin user>
heroku config:set GF_SECURITY_ADMIN_PASSWORD=<admin password>
heroku config:set GF_SECURITY_SECRET_KEY=<secret key>
```

## Running locally

The binary for the Grafana server has been built specifically for the platform running on Heroku, which is 64-bit Linux. If you are running another OS, you will not be able to run this locally as-is.

```sh
# Launch the grafana server locally
heroku local web
```
