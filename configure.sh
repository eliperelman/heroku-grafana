#!/bin/bash

set -e

HEROKU_APP=$1

# check $1 is valid
if [ -z $HEROKU_APP ]; then
    echo "Invalid Heroku app name"
    echo "Usage: $0 [appname]"
    exit
fi

echo "Checking app"
if ! heroku apps | grep $HEROKU_APP > /dev/null; then
    echo "Creating app"
    heroku create $HEROKU_APP
fi

echo "Checking buildpack"
if ! heroku buildpacks -a $HEROKU_APP | grep "http://github.com/ryandotsmith/null-buildpack.git" > /dev/null; then
    echo "Setting buildpack"
    heroku buildpacks:set http://github.com/ryandotsmith/null-buildpack.git
fi

echo "Checking for Postgres addon"
if ! heroku addons -a $HEROKU_APP | grep "heroku-postgresql" > /dev/null; then
    echo "Adding Postgres"
    heroku addons:create heroku-postgresql:hobby-dev -a $HEROKU_APP
fi

echo "Getting DATABASE_URL"
DATABASE_URL=`heroku config:get DATABASE_URL -a $HEROKU_APP`
if [[ ! $DATABASE_URL =~ ^postgres://([^:]+):([^@]+)@([^:]+):([^/]+)/(.*)$ ]]; then
    echo "DATABASE_URL format unrecognised"
    exit 1
fi
GF_DATABASE_HOST=${BASH_REMATCH[3]}:${BASH_REMATCH[4]}
GF_DATABASE_NAME=${BASH_REMATCH[5]}
GF_DATABASE_USER=${BASH_REMATCH[1]}
GF_DATABASE_PASSWORD=${BASH_REMATCH[2]}

echo "Getting Postgres credentials"
POSTGRES_CREDENTIALS=`heroku pg:credentials DATABASE -a $HEROKU_APP | grep dbname | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//'`

echo "Setting up session database"
(\
    echo "\connect ${GF_DATABASE_NAME}"; \
    echo "CREATE TABLE session (key CHAR(16) NOT NULL, data bytea, expiry INT NOT NULL, PRIMARY KEY (key));"; \
    echo "\dt"; echo "\q" \
) | heroku pg:psql -a $HEROKU_APP DATABASE_URL


echo "Enter administrator username [default: admin]"
read USER
USER=${USER:-admin}

echo "Enter administrator password"
read -s PASS

echo "Enter secret key"
read SECRET

echo "Setting variables"
heroku config:set \
    GF_DATABASE_TYPE="postgres" \
    GF_DATABASE_HOST="$GF_DATABASE_HOST" \
    GF_DATABASE_NAME="$GF_DATABASE_NAME" \
    GF_DATABASE_USER="$GF_DATABASE_USER" \
    GF_DATABASE_PASSWORD="$GF_DATABASE_PASSWORD" \
    GF_DATABASE_SSL_MODE="require" \
    GF_SESSION_PROVIDER="postgres" \
    GF_SESSION_PROVIDER_CONFIG="$POSTGRES_CREDENTIALS" \
    GF_SECURITY_ADMIN_USER="$USER" \
    GF_SECURITY_ADMIN_PASSWORD="$PASS" \
    GF_SECURITY_SECRET_KEY="$SECRET" \
    -a $HEROKU_APP
