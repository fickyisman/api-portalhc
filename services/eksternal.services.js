var model = require('../models/index')
const jwt = require('jsonwebtoken')
const config = require('../config/auth.config.js')
const services = {};

services.getUserbyemail = async function (user) {
    try {
        var stat = await model.stakeholder.findUserbyemail(user)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        // console.log(e)
        throw Error(e)
    }
}

services.signJwt = async function (result){
    try {
        // console.log(result.USER_ID)
        const token = jwt.sign({id:result.USER_ID,username:result.USERNAME},config.secret,{ expiresIn: '1h' });
        return token;
    } catch (e) {
        // Log Errors
        // console.log(e)
        throw Error(e)
    }
}

module.exports = services;