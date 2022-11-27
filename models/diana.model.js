const { dbPortalhc } = require("../config/dbConnection.config");
const { QueryTypes } = require('sequelize');
const model = {};

model.findTasklistbydate = async function (empId,date) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT 	a.WORKING_DATE,a.INDICATOR_ID,b.INDICATOR_DESC,a.STATUSACTIVITY_ID,c.STATUSACTIVITY_NAME,b.`TYPE` '+
                    ' FROM tx_employee_tasklist a '+
                    ' JOIN ms_kpi_indicator b ON a.INDICATOR_ID=b.INDICATOR_ID '+
                    ' JOIN ms_activity_status c ON a.STATUSACTIVITY_ID=c.STATUSACTIVITY_ID '+
                    ' WHERE a.EMPLOYEE_ID= :empId '+
                    ' AND a.WORKING_DATE= :date ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {empId,date},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findAccesstime = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT 	ACCESS_TIME '+
                    ' FROM ms_allowed_diana a  ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.deleteTasklist = async function (tasklistKey) {
    try {
        let sql = await dbPortalhc.query(
        'DELETE FROM tx_employee_tasklist '+
                    ' WHERE EMPLOYEE_TASKLIST_KEY= :tasklistKey  ',
        {
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {tasklistKey},
            type: QueryTypes.DELETE
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findTasklistbydate = async function (empId,date) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT 	a.EMPLOYEE_TASKLIST_KEY,a.WORKING_DATE, '+
                    ' a.INDICATOR_ID,b.INDICATOR_DESC,a.TYPE_KPI, '+
                    ' a.APPROVAL,c.PERSONNEL_NUMBER AS EMPLOYEE_NAME,c.POSITION_NAME '+
                    ' FROM tx_employee_tasklist a '+
                    ' JOIN ms_kpi_indicator b ON a.INDICATOR_ID=b.INDICATOR_ID '+
                    ' JOIN tx_injourney_employee c ON a.APPROVAL=c.PREV_PERSNO '+
                    ' WHERE a.EMPLOYEE_ID=:empId '+
                    ' AND a.WORKING_DATE= :date  ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {empId,date},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findDefaultactivity = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT * FROM ms_activity_master a   ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findAchievement = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT * FROM ms_activity_achievement a   ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findLeaderbygroup = async function (empId) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT 	COUNT(*) AS tot '+
                    ' FROM tx_injourney_employee a  '+
                    ' WHERE a.LINE_MANAGER= :empId ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {empId},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findLeaderbyapproval = async function (empId) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT 	COUNT(*) AS tot '+
                    ' FROM tx_tasklist_header b '+ 
                    ' WHERE b.APPROVAL= :empId ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {empId},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findDefaultapprover = async function (empId) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT 	a.LINE_MANAGER,a.LINE_MANAGER_NAME,a.LINE_MANAGER_POSITION '+
                    ' FROM tx_injourney_employee a '+
                    ' WHERE a.PREV_PERSNO= :empId ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {empId},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findDefaultindicator = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT 	a.INDICATOR_ID,a.UNIQUE_ID,a.INDICATOR_DESC '+
                    ' FROM ms_kpi_indicator a WHERE a.`TYPE`="DEF" ',
            {
                type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findAnotherapprover = async function (empId,searchApprover) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT 	a.LINE_MANAGER,a.LINE_MANAGER_NAME,a.LINE_MANAGER_POSITION '+
                    ' FROM tx_injourney_employee a '+
                    ' WHERE (a.LINE_MANAGER LIKE :searchApprover OR '+
                                ' a.LINE_MANAGER_NAME LIKE :searchApprover OR '+
                                ' a.LINE_MANAGER_POSITION LIKE :searchApprover ) '+
                    ' and a.LINE_MANAGER!=:empId '+
                    ' GROUP BY a.LINE_MANAGER ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {
                empId : empId,
                searchApprover : '%'+searchApprover+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findMyTeam = async function (empId,unitCode,date) {
    try {
        let sql = await dbPortalhc.query(
            'SELECT z.EMPLOYEE_ID, z.EMPLOYEE_NAME, z.POSITION_NAME, '+
            'sum(z.WAITING_ACTIVITY) AS WAITING_ACTIVITY, '+
            'sum(z.REJECTED_ACTIVITY) AS REJECTED_ACTIVITY, '+
            'sum(z.APPROVED_ACTIVITY) AS APPROVED_ACTIVITY '+
            'FROM ( '+
            'SELECT x.EMPLOYEE_ID,x.EMPLOYEE_NAME, x.POSITION_NAME, '+
            'CASE '+
            'WHEN y.STATUSACTIVITY_ID = "1" THEN COUNT(y.ACTIVITY_ID) '+
            'ELSE 0 '+
            'END AS WAITING_ACTIVITY, '+
            'CASE '+
            'WHEN y.STATUSACTIVITY_ID = "2" THEN COUNT(y.ACTIVITY_ID) '+
            '    ELSE 0 '+
            'END AS REJECTED_ACTIVITY, '+
            'CASE '+
            'WHEN y.STATUSACTIVITY_ID = "3" THEN COUNT(y.ACTIVITY_ID) '+
            '    ELSE 0 '+
            'END AS APPROVED_ACTIVITY '+
            'FROM '+
            '(SELECT a.EMPLOYEE_ID,b.EMPLOYEE_NAME, a.POSITION_NAME  '+
            'FROM tx_organization_structure as a  '+
            'JOIN ms_employee AS b ON a.EMPLOYEE_ID=b.EMPLOYEE_ID and b.EMPLOYEE_END_DATE="9999-12-31"  '+
            'WHERE a.UNIT_CODE = :unitCode AND a.EMPLOYEE_ID != :empId '+
            'UNION '+
            'SELECT a.EMPLOYEE_ID, c.EMPLOYEE_NAME, b.POSITION_NAME '+
            'FROM tx_employee_tasklist a '+
            'JOIN tx_organization_structure b ON a.EMPLOYEE_ID=b.EMPLOYEE_ID '+
            'JOIN ms_employee AS c ON b.EMPLOYEE_ID=c.EMPLOYEE_ID and c.EMPLOYEE_END_DATE="9999-12-31"  '+
            'WHERE a.APPROVAL = :empId  '+
            'AND a.EMPLOYEE_ID NOT IN ( '+
            'SELECT a.EMPLOYEE_ID '+
            'FROM tx_organization_structure as a  '+
            'JOIN ms_employee AS b ON a.EMPLOYEE_ID=b.EMPLOYEE_ID and b.EMPLOYEE_END_DATE="9999-12-31"  '+
            'WHERE a.UNIT_CODE = :unitCode AND a.EMPLOYEE_ID != :empId) '+
            ') AS x '+
            'left JOIN tx_employee_activity y ON x.EMPLOYEE_ID = y.EMPLOYEE_ID  AND y.ACTIVITY_DATE=:date '+
            'GROUP BY x.EMPLOYEE_ID, y.STATUSACTIVITY_ID ) AS z '+
            'GROUP BY z.EMPLOYEE_ID ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {
                empId : empId,
                unitCode : unitCode,
                date : date
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findKpi = async function () {
    try {
        let sql = await dbPortalhc.query(
            'SELECT "KPI01" as KPI_CODE, "KPI" as KPI_DESC '+
            'UNION '+
            'SELECT  "KPI02" as KPI_CODE, "NON KPI" as KPI_DESC',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
           
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findNotif = async function (empId) {
    try {
        let sql = await dbPortalhc.query(
            'SELECT a.employee_id, a.activity_date, a.cat_message, a.notif_message, a.cat_approval, '+
            'a.id_task_activity, a.read_fl '+
            'FROM tx_diana_notification a '+
            'WHERE a.employee_id=:empId',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {
                empId : empId
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.insertTasklistheader = async function (tasklistKey,startDate,endDate,approver,statusTasklist,workingType,nip) {
    try {
        let sql = await dbPortalhc.query(
            'INSERT INTO tx_tasklist_header '+
                    ' (TASKLIST_KEY,TASKLIST_STARTDATE,TASKLIST_ENDDATE, '+
                        ' APPROVAL,STATUSACTIVITY_ID,STATUSWFA, '+
                        ' EMPLOYEE_ID,CREATED_BY,CREATED_TIME) '+
            ' VALUES (:tasklistKey, :startDate, :endDate, '+
                        ' :approver, :statusTasklist, :workingType, '+
                        ' :nip ,:nip, now() ) '+
            ' ON DUPLICATE KEY UPDATE TASKLIST_STARTDATE = :startDate, '+
                        ' TASKLIST_ENDDATE = :endDate, APPROVAL = :approver, '+
                        ' STATUSACTIVITY_ID = :statusTasklist, STATUSWFA = :workingType, '+
                        ' UPDATED_BY = :nip, UPDATED_TIME = now() ',
            {
                replacements: {
                    tasklistKey : tasklistKey,
                    startDate : startDate,
                    endDate : endDate,
                    approver : approver,
                    statusTasklist : statusTasklist,
                    workingType : workingType,
                    nip : nip
                },
                type: QueryTypes.INSERT
            });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.insertTasklistperiod = async function (nip,arrayCategory,startDate,endDate) {
    try {
        let sql = await dbPortalhc.query(
            'INSERT IGNORE INTO tx_tasklist_period '+
                    ' (EMPLOYEE_ID,INDICATOR_ID,START_PERIOD, '+
                        ' END_PERIOD,CREATED_BY,CREATED_TIME) '+
            ' VALUES (:nip, :arrayCategory, :startDate, '+
                        ' :endDate ,:nip, now() ) ',
            {
                replacements: {
                    nip : nip,
                    arrayCategory : arrayCategory,
                    startDate : startDate,
                    endDate : endDate
                },
                type: QueryTypes.INSERT
            });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.insertTasklistdetail = async function (primaryKey,clientInsertId,tasklistKey,fixArray,nip) {
    try {
        let sql = await dbPortalhc.query(
            'INSERT INTO tx_tasklist_detail '+
                    ' (TASKLIST_ID,TASKLISTPERIOD_ID,TASKLIST_KEY, '+
                        ' INDICATOR_ID,CREATED_BY,CREATED_TIME) '+
            ' VALUES (:primaryKey, :clientInsertId, :tasklistKey, '+
                        ' :fixArray ,:nip, now() ) ',
            {
                replacements: {
                    primaryKey : primaryKey,
                    clientInsertId : clientInsertId,
                    tasklistKey : tasklistKey,
                    fixArray : fixArray,
                    nip : nip
                },
                type: QueryTypes.INSERT
            });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.insertWorkingtype = async function (keys,nip,time,workingType,statusPlan) {
    try {
        let sql = await dbPortalhc.query(
            'INSERT IGNORE INTO tx_working_type '+
                    ' (WORKINGEMPLOYEE_ID,EMPLOYEE_ID,WORKING_DATE, '+
                    ' WORKING_TYPE,WORKING_STATUS,CREATED_BY,CREATED_TIME) '+
                    ' VALUES(:keys ,:nip,:time,:workingType,:statusPlan,:nip,NOW()) ',
            {
                replacements: {
                    keys : keys,
                    nip : nip,
                    time : time,
                    workingType : workingType,
                    statusPlan : statusPlan
                },
                type: QueryTypes.INSERT
            });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.insertNewtasklist = async function (empId,tasklistNew,uniqKey,orgCode,types) {
    try {
        let sql = await dbPortalhc.query(
            'INSERT INTO ms_kpi_indicator '+
                    ' (INDICATOR_DESC,ORGANIZATION_CODE,UNIQUE_ID, '+
                    ' TYPE,CREATED_BY,CREATED_TIME) '+
            ' VALUES(:tasklistNew ,:orgCode,:uniqKey, '+
                    ' :types,:empId,NOW()) '+
            ' ON DUPLICATE KEY UPDATE '+
                        ' INDICATOR_DESC= :tasklistNew,'+ 
                        ' UPDATED_BY=:empId, UPDATED_TIME=NOW() ',
            {
                replacements: {
                    empId : empId,
                    uniqKey : uniqKey,
                    orgCode : orgCode,
                    types : types,
                    tasklistNew : tasklistNew
                },
                type: QueryTypes.INSERT
            });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.insertEmptasklist = async function (keyEmplTasklist,nip,time,fixArray,statusTasklist,typeEmpTasklist,typeKpi,approver,activityKey) {
    try {
        let sql = await dbPortalhc.query(
            'INSERT INTO tx_employee_tasklist '+
                    ' (EMPLOYEE_TASKLIST_KEY,EMPLOYEE_ID,WORKING_DATE, '+
                    ' INDICATOR_ID,STATUSACTIVITY_ID,TYPE_TASKLIST,ACTIVITY_KEY, '+
                    ' APPROVAL,TYPE_KPI,CREATED_BY,CREATED_TIME) '+
			' VALUES(:keyEmplTasklist, :nip, :time, :fixArray, :statusTasklist, :typeEmpTasklist,:activityKey, :approver,:typeKpi, :nip ,NOW()) '+
				    ' ON DUPLICATE KEY UPDATE '+
                        ' STATUSACTIVITY_ID= :statusTasklist, ACTIVITY_KEY=:activityKey, '+ 
                        ' APPROVAL= :approver,TYPE_KPI=:typeKpi,UPDATED_BY=:nip, UPDATED_TIME=NOW() ',
            {
                replacements: {
                    keyEmplTasklist : keyEmplTasklist,
                    nip : nip,
                    time : time,
                    fixArray : fixArray,
                    statusTasklist : statusTasklist,
                    typeEmpTasklist : typeEmpTasklist,
                    typeKpi: typeKpi,
                    approver: approver,
                    activityKey: activityKey
                },
                type: QueryTypes.INSERT
            });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

module.exports = model;