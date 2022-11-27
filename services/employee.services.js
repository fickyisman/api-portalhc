var model = require('../models/index')
const services = {};

services.employeeNominatif = async function () {
    try {
        var stat = await model.employee.getAllnominatif()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}


services.personalInternalorg = async function (empId) {
    try {
        var stat = await model.employee.findOrganizationinternal(empId)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}


services.personalEksternalorg = async function (empId) {
    try {
        var stat = await model.employee.findOrganizationeksternal(empId)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.personalInfo = async function (paramsEmployeeid) {
    try {
        var stat = await model.employee.findPersonalinfo(paramsEmployeeid)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.personalSummary = async function (paramsEmployeeid) {
    try {
        var stat = await model.employee.findSummary(paramsEmployeeid)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.personalLisence = async function (paramsEmployeeid) {
    try {
        var stat = await model.employee.findLicense(paramsEmployeeid)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.personalDiklatexternal = async function (paramsEmployeeid) {
    try {
        var stat = await model.employee.findDiklatexternal(paramsEmployeeid)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.personalDiklatnonmanagerial = async function (paramsEmployeeid) {
    try {
        var stat = await model.employee.findDiklatnonmanagerial(paramsEmployeeid)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.personalDiklatmanagerial = async function (paramsEmployeeid) {
    try {
        var stat = await model.employee.findDiklatmanagerial(paramsEmployeeid)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.personalFormaleducation = async function (paramsEmployeeid) {
    try {
        var stat = await model.employee.findFormaleducation(paramsEmployeeid)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.personalStrength = async function (paramsEmployeeid) {
    try {
        var stat = await model.employee.findStrength(paramsEmployeeid)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.personalPengalamankerja = async function (paramsEmployeeid) {
    try {
        var stat = await model.employee.findPengalamankerja(paramsEmployeeid)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.personalHistoryteam = async function (paramsEmployeeid) {
    try {
        var stat = await model.employee.findHistoryteam(paramsEmployeeid)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.personalPenugasan = async function (paramsEmployeeid) {
    try {
        var stat = await model.employee.findPenugasan(paramsEmployeeid)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.personalHistoryjabatan = async function (paramsEmployeeid) {
    try {
        var stat = await model.employee.findHistoryjabatan(paramsEmployeeid)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.personalAchievement = async function (paramsEmployeeid) {
    try {
        var stat = await model.employee.findAchievement(paramsEmployeeid)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.personalAssignmenthistory = async function (paramsEmployeeid) {
    try {
        var stat = await model.employee.findAssignmenthistory(paramsEmployeeid)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.personalSpeakerexperience = async function (paramsEmployeeid) {
    try {
        var stat = await model.employee.findSpeakerexperience(paramsEmployeeid)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

module.exports = services;