const employee = require("./employee.controller");
const injourney = require("./injourney.controller");
const calendar = require("./calendar.controller");
const stakeholder = require("./eksternal.controller");
const diana = require("./diana.controller");
const controller = {};

controller.employee = employee;
controller.injourney = injourney;
controller.calendar = calendar;
controller.stakeholder = stakeholder;
controller.diana = diana;

module.exports = controller;