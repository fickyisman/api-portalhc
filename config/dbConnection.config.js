"use strict"

const Sequelize = require("sequelize")
const env = process.env.NODE_ENV || "development"
const config = require("./dbEnv.config")[env]

const dbPortalhc = new Sequelize(config.databasePortalhc, config.usernamePortalhc, config.passwordPortalhc, {
    dialect: config.dialectPortalhc,
    host: config.hostnamePortalhc,
    define: {
        underscored: true,
        freezeTableName: true, //use singular table name
        timestamps: false,  // I do not want timestamp fields by default
    },
    dialectOptions: {
        useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: function (field, next) { // for reading from database
            if (field.type === 'DATETIME') {
            return field.string()
            }
            return next()
            },
    },
    timezone: '+07:00'
});

const dbLms = new Sequelize(config.databaseLms, config.usernameLms, config.passwordLms, {
    dialect: config.dialectLms,
    host: config.hostnameLms,
    define: {
        underscored: true,
        freezeTableName: true, //use singular table name
        timestamps: false,  // I do not want timestamp fields by default
    },
    dialectOptions: {
        useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: function (field, next) { // for reading from database
            if (field.type === 'DATETIME') {
            return field.string()
            }
            return next()
            },
    },
    timezone: '+07:00'
});

const dbApi = new Sequelize(config.databaseApi, config.usernameApi, config.passwordApi, {
    dialect: config.dialectApi,
    host: config.hostnameApi,
    define: {
        underscored: true,
        freezeTableName: true, //use singular table name
        timestamps: false,  // I do not want timestamp fields by default
    },
    dialectOptions: {
        useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: function (field, next) { // for reading from database
            if (field.type === 'DATETIME') {
            return field.string()
            }
            return next()
            },
    },
    timezone: '+07:00'
});

// console.log(dbIperform)
module.exports = {
    dbPortalhc,
    dbLms,
    dbApi
}