var model = require('../models/index')
const services = {};

services.areaInfo = async function () {
    try {
        var stat = await model.injourney.getArea()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.directorateInfo = async function () {
    try {
        var stat = await model.injourney.getDirectorate()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.gradeInfo = async function () {
    try {
        var stat = await model.injourney.getGrade()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.positionlevelInfo = async function () {
    try {
        var stat = await model.injourney.getPositionlevel()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.positiontypeInfo = async function () {
    try {
        var stat = await model.injourney.getPositiontype()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.jobfamilyInfo = async function () {
    try {
        var stat = await model.injourney.getJobfamily()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.competencyInfo = async function () {
    try {
        var stat = await model.injourney.getCompetency()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.divisionInfo = async function () {
    try {
        var stat = await model.injourney.getDivision()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.groupInfo = async function () {
    try {
        var stat = await model.injourney.getGroup()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.positionInfoAll = async function (search) {
    try {
        var stat = await model.injourney.getPositionAll(search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.positionInfo = async function (mulai,panjang,search) {
    try {
        var stat = await model.injourney.getPosition(mulai,panjang,search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.positionInfonofilter = async function () {
    try {
        var stat = await model.injourney.getPositionnofilter()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeeCertificateInfoAll = async function (search) {
    try {
        var stat = await model.injourney.getEmployeecertificateAll(search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeeCertificateInfo = async function (mulai,panjang,search) {
    try {
        var stat = await model.injourney.getEmployeecertificate(mulai,panjang,search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeeCertificateInfonofilter = async function () {
    try {
        var stat = await model.injourney.getEmployeecertificatenofilter()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeehukdisInfoAll = async function (search) {
    try {
        var stat = await model.injourney.getEmployeehukdisAll(search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeehukdisInfo = async function (mulai,panjang,search) {
    try {
        var stat = await model.injourney.getEmployeehukdis(mulai,panjang,search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeehukdisInfonofilter = async function () {
    try {
        var stat = await model.injourney.getEmployeehukdisnofilter()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeetrainingInfoAll = async function (search) {
    try {
        var stat = await model.injourney.getEmployeetrainingAll(search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeetrainingInfo = async function (mulai,panjang,search) {
    try {
        var stat = await model.injourney.getEmployeetraining(mulai,panjang,search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeetrainingInfonofilter = async function () {
    try {
        var stat = await model.injourney.getEmployeetrainingnofilter()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.assessmentresultInfoAll = async function (search) {
    try {
        var stat = await model.injourney.getAssessmentresultAll(search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.assessmentresultInfo = async function (mulai,panjang,search) {
    try {
        var stat = await model.injourney.getAssessmentresult(mulai,panjang,search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.assessmentresultInfonofilter = async function () {
    try {
        var stat = await model.injourney.getAssessmentresultnofilter()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeeCompetencyInfoAll = async function (search) {
    try {
        var stat = await model.injourney.getEmployeecompetencyAll(search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeeCompetencyInfo = async function (mulai,panjang,search) {
    try {
        var stat = await model.injourney.getEmployeecompetency(mulai,panjang,search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeeCompetencyInfonofilter = async function () {
    try {
        var stat = await model.injourney.getEmployeecompetencynofilter()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeeperformanceInfoAll = async function (search) {
    try {
        var stat = await model.injourney.getEmployeeperformanceAll(search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeeperformanceInfo = async function (mulai,panjang,search) {
    try {
        var stat = await model.injourney.getEmployeeperformance(mulai,panjang,search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeeperformanceInfonofilter = async function () {
    try {
        var stat = await model.injourney.getEmployeeperformancenofilter()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeeInfoAll = async function (search) {
    try {
        var stat = await model.injourney.getEmployeeAll(search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeeInfo = async function (mulai,panjang,search) {
    try {
        var stat = await model.injourney.getEmployee(mulai,panjang,search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeeInfonofilter = async function () {
    try {
        var stat = await model.injourney.getEmployeenofilter()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeepositionhistoryInfoAll = async function (search) {
    try {
        var stat = await model.injourney.getEmployeepositionhistoryAll(search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeepositionhistoryInfo = async function (mulai,panjang,search) {
    try {
        var stat = await model.injourney.getEmployeepositionhistory(mulai,panjang,search)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.employeepositionhistoryInfonofilter = async function () {
    try {
        var stat = await model.injourney.getEmployeepositionhistorynofilter()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

module.exports = services;