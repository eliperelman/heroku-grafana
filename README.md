# heroku-grafana

Run Grafana on Heroku

## Setup

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

# depending on whatever else you may store in this database, determine your ssl setting
heroku config:set GF_DATABASE_SSL_MODE=<disable | require | verify-null>
```

Note: Consider [configuring Grafana's session provider](http://docs.grafana.org/installation/configuration/#session) to also use Postgres.

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

The binary for the Grafana server has been build specifically for the platform running on Heroku, which is 64-bit Linux. If you are running another OS, you will not be able to run this locally as-is.

```sh
# Launch the grafana server locally
heroku local web
```