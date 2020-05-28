const dotenv = require('dotenv');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

dotenv.config();

const withTM = require('next-transpile-modules')(['bpmn-js', 'min-dom']);
withCSS(
  withTM({
    env: {
      AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
      AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
      REDIRECT_URI: process.env.REDIRECT_URI,
      POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
      API_BASE_URI: process.env.API_BASE_URI,
      PORT:process.env.PORT || 3000
    }
  })
);
