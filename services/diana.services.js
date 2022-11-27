var model = require('../models/index')
const md5 = require('md5');

const services = {};

services.deleteTasklist = async function (tasklistKey,indicatorId) {
    try {
        var stat = await model.diana.deleteTasklist(tasklistKey)
        
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.tasklistBydate = async function (empId,date) {
    try {
        var stat = await model.diana.findTasklistbydate(empId,date)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.accessTime = async function () {
    try {
        var accessTime;
        var stat = await model.diana.findAccesstime()
        .then((stat) =>{
            accessTime = stat[0].ACCESS_TIME
        })
        return accessTime
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.findLeader = async function (empId) {
    try {
        var totGroup;
        var totApproval;
        var asLeader;

        var stat = await model.diana.findLeaderbygroup(empId)
            .then((stat) =>{
                totGroup = stat[0].tot
            })
        
        var stat2 = await model.diana.findLeaderbyapproval(empId)
            .then((stat2) =>{
                totApproval = stat2[0].tot
            })
        console.log(totGroup+' - '+totApproval)
        if(totGroup > 0 || totApproval >0){
            asLeader = true;
        }else{
            asLeader = false;
        }

        return asLeader;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.approverBydefault = async function (empId) {
    try {
        var stat = await model.diana.findDefaultapprover(empId)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.defaultIndicator = async function () {
    try {
        var stat = await model.diana.findDefaultindicator()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.approverByother = async function (empId,searchApprover) {
    try {
        var stat = await model.diana.findAnotherapprover(empId,searchApprover)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.myTeam = async function (empId,unitCode,date) {
    try {
        var stat = await model.diana.findMyTeam(empId,unitCode,date)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.kpi = async function (searchApprover) {
    try {
        var stat = await model.diana.findKpi(searchApprover)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.notif = async function (empId) {
    try {
        var stat = await model.diana.findNotif(empId)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.tasklistBydate = async function (empId,date) {
    try {
        var stat = await model.diana.findTasklistbydate(empId,date)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.defaultActivity = async function () {
    try {
        var stat = await model.diana.findDefaultactivity()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.achievement = async function () {
    try {
        var stat = await model.diana.findAchievement()
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.postNewtasklist = async function (empId,tasklistNew,orgCode) {
    try {
        let types   = 'NON';
        let dnow    = new Date();
        let uniqKey = md5(empId+orgCode+types+dnow+tasklistNew)
        var stat = await model.diana.insertNewtasklist(empId,tasklistNew,uniqKey,orgCode,types)
        // console.log(stat)
        return stat;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

services.postHeadertasklist = async function (startDate,endDate,approver,statusTasklist,workingType,nip,tasklistArray,dnow,dstart,dend,typeKpi) {
    try {
        let arrayCategory   = tasklistArray.replace(/^\[|\]$/g, "").split(",");
        let tasklistKey     = md5(startDate+endDate+nip);
        let statusPlan      = 'PLAN';

        // console.log(tasklistArray+' tasklist')
        var insertHeader = await model.diana.insertTasklistheader(tasklistKey,startDate,endDate,approver,statusTasklist,workingType,nip)
        if(insertHeader.length > 0){
            for (i = 0; i < arrayCategory.length; i++) {
                let fixArray = arrayCategory[i].replace(/[|&;$%@"'<>()+,]/g, "");
                // console.log(fixArray)
                
                var insertPeriod = await model.diana.insertTasklistperiod(nip,fixArray,startDate,endDate)
                .then(function(clientInsertId){
                    let primaryKey = md5(startDate+endDate+nip+dnow+fixArray+clientInsertId[0])
                    var insertDetail = model.diana.insertTasklistdetail(primaryKey,clientInsertId[0],tasklistKey,fixArray,nip)
                });
            }   
            // console.log(intervalDate);
            for(time=dstart; time<=dend; time.setDate(time.getDate()+1)){
                
                var keys = md5(nip+time)
                let typeEmpTasklist = '0';
                
                for (j = 0; j < arrayCategory.length; j++) {
                    let fixArrays = arrayCategory[j].replace(/[|&;$%@"'<>()+,]/g, "");
                    let keyEmplTasklist = md5(nip+time+fixArrays);
                                        
                    var insertWorkingType = model.diana.insertWorkingtype(keys,nip,time,workingType,statusPlan)
                    var insertEmptasklist = model.diana.insertEmptasklist(keyEmplTasklist,nip,time,fixArrays,statusTasklist,typeEmpTasklist,typeKpi,approver,keys)
                    // console.log(fixArrays)
                }
            }
        }
        return insertHeader;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

module.exports = services;