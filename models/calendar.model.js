const { dbPortalhc } = require("../config/dbConnection.config");
const { QueryTypes } = require('sequelize');
const model = {};

model.findHoliday = async function (startDate,endDate) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT HOLIDAY_DATE,HOLIDAY_DESC,HOLIDAY_NAME '+
                ' from tx_holiday'+
                ' where HOLIDAY_DATE >= :startDate and HOLIDAY_DATE<= :endDate',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {startDate,endDate},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findCuti = async function (empId,startDate,endDate) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT 	a.LEAVE_TYPE,a.LEAVE_DESC,a.BEGIN_DATE,a.END_DATE '+
                    ' FROM tx_leave_request a '+
                    ' WHERE a.EMPLOYEE_ID = :empId '+
                    ' AND a.BEGIN_DATE >= :startDate '+
                    ' AND a.END_DATE <= :endDate ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {empId,startDate,endDate},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findAttendacereq = async function (empId,startDate,endDate) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT 	a.BEGIN_DATE,a.END_DATE,a.ATTENDANCE_TYPE,a.ATTENDANCE_DESC '+
                    ' FROM tx_attendance_request a '+
                    ' WHERE a.EMPLOYEE_ID = :empId '+
                    ' AND a.BEGIN_DATE >= :startDate '+
                    ' AND a.END_DATE <= :endDate ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {empId,startDate,endDate},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findSpj = async function (empId,startDate,endDate) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT 	a.BEGIN_DATE,a.END_DATE,a.OFFICIALTRAVEL_DESC,a.OFFICIALTRAVEL_NAME '+
                    ' FROM tx_official_travel a '+
                    ' WHERE a.EMPLOYEE_ID = :empId '+
                    ' AND a.BEGIN_DATE >= :startDate '+
                    ' AND a.END_DATE <= :endDate ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {empId,startDate,endDate},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findWorkingtype = async function (empId,startDate,endDate) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT 	a.TASKLIST_STARTDATE,a.TASKLIST_ENDDATE,a.STATUSACTIVITY_ID, '+
                    ' b.STATUSACTIVITY_NAME,a.STATUSWFA '+
                    ' FROM tx_tasklist_header a '+
                    ' JOIN ms_activity_status b ON a.STATUSACTIVITY_ID=b.STATUSACTIVITY_ID '+
                    ' WHERE a.EMPLOYEE_ID= :empId'+
                    ' AND a.TASKLIST_STARTDATE >= :startDate '+
                    ' AND a.TASKLIST_ENDDATE <= :endDate '+
                    ' ORDER BY a.TASKLIST_STARTDATE asc ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {empId,startDate,endDate},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findActivity = async function (empId,startDate,endDate) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT 	count(*) as totalActivity,sum(a.ACTIVITY_DURATION/60) as totalDuration, '+
                    ' a.ACTIVITY_KEY,a.ACTIVITY_DATE,b.STATUSACTIVITY_NAME '+
                    ' FROM tx_employee_activity a '+
                    ' JOIN ms_activity_status b ON a.STATUSACTIVITY_ID=b.STATUSACTIVITY_ID '+
                    ' WHERE a.EMPLOYEE_ID= :empId '+
                    ' AND a.ACTIVITY_DATE >= :startDate '+
                    ' AND a.ACTIVITY_DATE <= :endDate '+
                    ' GROUP BY a.ACTIVITY_DATE,a.STATUSACTIVITY_ID '+
                    ' ORDER BY a.ACTIVITY_DATE asc ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {empId,startDate,endDate},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

module.exports = model;