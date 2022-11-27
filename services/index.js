const employee = require("./employee.services");
const injourney = require("./injourney.services");
const calendar = require("./calendar.services");
const stakeholder = require("./eksternal.services");
const diana = require("./diana.services");
const services = {};

services.employee = employee;
services.injourney = injourney;
services.calendar = calendar;
services.stakeholder = stakeholder;
services.diana = diana;

module.exports = services;