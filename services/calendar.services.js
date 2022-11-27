var model = require('../models/index')
const services = {};

services.holiday = async function (startDate,endDate) {
    try {
        var stat = await model.calendar.findHoliday(startDate,endDate)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.cuti = async function (empId,startDate,endDate) {
    try {
        var stat = await model.calendar.findCuti(empId,startDate,endDate)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.attendanceReq = async function (empId,startDate,endDate) {
    try {
        var stat = await model.calendar.findAttendacereq(empId,startDate,endDate)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.spj = async function (empId,startDate,endDate) {
    try {
        var stat = await model.calendar.findSpj(empId,startDate,endDate)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.workingType = async function (empId,startDate,endDate) {
    try {
        var stat = await model.calendar.findWorkingtype(empId,startDate,endDate)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.activity = async function (empId,startDate,endDate) {
    try {
        var stat = await model.calendar.findActivity(empId,startDate,endDate)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

module.exports = services;