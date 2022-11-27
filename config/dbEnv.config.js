const path = require('path');
require("dotenv").config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`)
})

const {
  DB_HOSTNAME_PORTALHC, DB_NAME_PORTALHC, DB_USERNAME_PORTALHC, DB_PASSWORD_PORTALHC, DB_DIALECT_PORTALHC,
  DB_HOSTNAME_LMS, DB_NAME_LMS, DB_USERNAME_LMS, DB_PASSWORD_LMS, DB_DIALECT_LMS,
  DB_HOSTNAME_PORTALAPI, DB_NAME_PORTALAPI, DB_USERNAME_PORTALAPI, DB_PASSWORD_PORTALAPI, DB_DIALECT_PORTALAPI
} = process.env

module.exports = {
  development: {
    usernamePortalhc: DB_USERNAME_PORTALHC,
    passwordPortalhc: DB_PASSWORD_PORTALHC,
    databasePortalhc: DB_NAME_PORTALHC,
    hostnamePortalhc: DB_HOSTNAME_PORTALHC,
    dialectPortalhc: DB_DIALECT_PORTALHC,

    usernameLms: DB_USERNAME_LMS,
    passwordLms: DB_PASSWORD_LMS,
    databaseLms: DB_NAME_LMS,
    hostnameLms: DB_HOSTNAME_LMS,
    dialectLms: DB_DIALECT_LMS,

    usernameApi: DB_USERNAME_PORTALAPI,
    passwordApi: DB_PASSWORD_PORTALAPI,
    databaseApi: DB_NAME_PORTALAPI,
    hostnameApi: DB_HOSTNAME_PORTALAPI,
    dialectApi: DB_DIALECT_PORTALAPI,
  },
  production: {
    usernamePortalhc: DB_USERNAME_PORTALHC,
    passwordPortalhc: DB_PASSWORD_PORTALHC,
    databasePortalhc: DB_NAME_PORTALHC,
    hostnamePortalhc: DB_HOSTNAME_PORTALHC,
    dialectPortalhc: DB_DIALECT_PORTALHC,

    usernameLms: DB_USERNAME_LMS,
    passwordLms: DB_PASSWORD_LMS,
    databaseLms: DB_NAME_LMS,
    hostnameLms: DB_HOSTNAME_LMS,
    dialectLms: DB_DIALECT_LMS,

    usernameApi: DB_USERNAME_PORTALAPI,
    passwordApi: DB_PASSWORD_PORTALAPI,
    databaseApi: DB_NAME_PORTALAPI,
    hostnameApi: DB_HOSTNAME_PORTALAPI,
    dialectApi: DB_DIALECT_PORTALAPI,
  },
}