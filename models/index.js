const employee = require("./employee.model");
const injourney = require("./injourney.model");
const calendar = require("./calendar.model");
const stakeholder = require("./eksternal.model");
const diana = require("./diana.model");
const model = {};

model.employee = employee;
model.injourney = injourney;
model.calendar = calendar;
model.stakeholder = stakeholder;
model.diana = diana;

module.exports = model;