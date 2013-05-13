# Twit Listen

## Install

First, clone the repo and install dependencies:

  git clone git@github.com:garbados/twit_listen.git
  cd twit_listen
  npm install

## Usage

To run the app, you'll need to export certain variables to connect to Twitter and Cloudant. To sample Twitter's public stream, you'll need...

  TWITTER_CONSUMER_KEY, the Consumer Key for your Twitter app
  TWITTER_CONSUMER_SECRET, the Consumer Secret for your Twitter app
  TWITTER_ACCESS_TOKEN, the Access Token for your Twitter app
  TWITTER_ACCESS_TOKEN_SECRET, the Access Token Secret for your Twitter app

To connect to your Cloudant database, export the following:

  CLOUDANT_URL, ex: garbados.cloudant.com
  CLOUDANT_USERNAME, your Cloudant username
  CLOUDANT_PASSWORD, your Cloudant password
  CLOUDANT_DB, ex: twit_listen

I use [Heroku's toolbelt](https://toolbelt.heroku.com/), wherein you put your environment variables in `.env`, then run the application with `foreman start`. Foreman exports your environment variables within the context of the application's process. See [Heroku: Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars) for more details.

If not using Foreman, run the app with `node app.js`.

## Public Use

The `twit_listen` database, and all its data, are publicly readable at [https://garbados.cloudant.com/twit_listen](https://garbados.cloudant.com/twit_listen). You can use the app in this repo to do it yourself, or access the data there.

## Public Views

COMING SOON :D