const { dbPortalhc } = require("../config/dbConnection.config");
const { QueryTypes } = require('sequelize');
const model = {};

model.findPersonalinfo = async function (paramsEmployeeid) {

    try {
        let sql = await dbPortalhc.query(
        'SELECT UPPER(a.EMPLOYEE_NAME) as NAMA, a.TITLE_NAME as GELAR, a.EMPLOYEE_ID as NIP, '+
                ' UPPER(a.CITY_NAME) as TEMPAT, '+
                ' a.EMPLOYEE_DATE_BIRTH as LAHIR, '+
                ' UPPER(a.GENDER_ID) as GENDER, r.RELIGION_KEY_NAME as AGAMA, '+
                ' UPPER(p.POSITION_HISTORY_POSITION) as JABATAN,'+
                ' UPPER(pa.PERSONNEL_AREA_NAME) as BRANCH,'+
                ' UPPER(mo1.SHORTTEXT) as UNIT,'+
                ' UPPER(d.ADDRESS_STREET) as ALAMAT,'+
                ' UPPER(c.COMMUNICATION_VALUE) as HP,'+
                ' UPPER(c2.COMMUNICATION_VALUE) as EMAIL_SAP,'+
                ' UPPER(c4.COMMUNICATION_VALUE) as EMAIL_ALT_SAP,'+
                ' UPPER(c5.COMMUNICATION_VALUE) as EMERGENCY_NUMBER, '+
                ' UPPER(c3.VAL) as SOCIAL, '+
                ' UPPER(i.IDENTITY_ID_NO) as NIPASANGAN, '+
                ' UPPER(n.NPWP_NUMBER) as NPWP, '+
                ' UPPER(a.BLOOD_GROUP) as BLOOD, '+
                ' UPPER(a.KELURAHAN) as KELURAHAN, '+
                ' UPPER(a.KECAMATAN) as KECAMATAN, '+
                ' UPPER(a.KOTA) as KOTA, '+
                ' UPPER(a.PROVINCE_NAME) as PROVINCE, '+
                ' UPPER(a.JUMLAH_ANGGOTA_KELUARGA) as JUMLAH_ANGGOTA_KELUARGA '+
            ' FROM (select * from ms_employee WHERE md5(EMPLOYEE_ID)= :paramsEmployeeid and EMPLOYEE_END_DATE="99991231") a '+
                ' LEFT JOIN ms_religion_key r ON a.RELIGIOUS_ID = r.RELIGION_KEY_ID '+
                ' LEFT JOIN tx_employee_org org ON org.EMPLOYEE_ID = a.EMPLOYEE_ID AND org.EMPLOYEE_ORG_END_DATE="99991231"'+
                ' LEFT JOIN ms_personnel_area pa ON pa.PERSONNEL_AREA_ID=org.BRANCH_ID'+
                ' LEFT JOIN ms_object mo1 ON org.ORGANIZATION_ID=mo1.OBJECT_ID'+
                ' LEFT JOIN (SELECT * FROM tx_position_history WHERE md5(EMPLOYEE_ID)= :paramsEmployeeid ORDER BY POSITION_HISTORY_BEGIN_DATE DESC LIMIT 1) p ON p.EMPLOYEE_ID = a.EMPLOYEE_ID '+
                ' LEFT JOIN tx_address d ON d.EMPLOYEE_ID = a.EMPLOYEE_ID AND d.ADDRESS_TYPE_ID=1 and d.ADDRESS_END_DATE="99991231" '+
                ' LEFT JOIN tx_identity i ON i.EMPLOYEE_ID = a.EMPLOYEE_ID AND i.IDENTITY_TYPE_ID=7 and date(i.IDENTITY_EXPIRED_DATE)="99991231" '+
                ' LEFT JOIN tx_communication c ON c.EMPLOYEE_ID = a.EMPLOYEE_ID AND c.SUBTYPE_COMMUNICATION_ID = "CELL" AND c.FLAG=0 '+
                ' LEFT JOIN tx_communication c2 ON c2.EMPLOYEE_ID = a.EMPLOYEE_ID AND c2.SUBTYPE_COMMUNICATION_ID = "0010" AND c2.FLAG=0 '+
                ' LEFT JOIN tx_communication c4 ON c4.EMPLOYEE_ID = a.EMPLOYEE_ID AND c4.SUBTYPE_COMMUNICATION_ID = "0030" AND c4.FLAG=0 '+
                ' LEFT JOIN tx_communication c5 ON c5.EMPLOYEE_ID = a.EMPLOYEE_ID AND c5.SUBTYPE_COMMUNICATION_ID = "EGC" AND c4.FLAG=1 '+
                ' LEFT JOIN (SELECT EMPLOYEE_ID, GROUP_CONCAT(COMMUNICATION_VALUE) as VAL FROM tx_communication WHERE md5(EMPLOYEE_ID)= :paramsEmployeeid AND SUBTYPE_COMMUNICATION_ID IN ("FB", "TWIT", "IG") GROUP BY EMPLOYEE_ID) c3 ON c3.EMPLOYEE_ID = a.EMPLOYEE_ID '+
                ' LEFT JOIN tx_npwp n ON n.EMPLOYEE_ID = a.EMPLOYEE_ID AND n.NPWP_END_TIME="9999-12-31 00:00:00" ORDER BY c.UPDATED_TIME DESC LIMIT 1 ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findSummary = async function (paramsEmployeeid) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT UPPER(SUMMARY) as SUMMARY FROM tx_summary WHERE md5(EMPLOYEE_ID)= :paramsEmployeeid ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getAllnominatif = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT 	a.PREV_PERSNO AS EMPLOYEE_ID,a.PERSONNEL_NUMBER AS EMPLOYEE_NAME, '+
                    ' a.PERSONNEL_AREA_TEXT AS PERSONNEL_AREA,a.AREA_NOMENKLATUR AS PERSONNEL_AREA_TEXT, '+
                    ' c.EMPLOYEE_GROUP_NAME,d.EMPLOYEE_SUB_GROUP_NAME,a.POSITION_NAME,a.DIVISION AS SUB_UNIT, '+
                    ' a.`GROUP` AS UNIT,a.GENDER_TEXT,a.EDUCATION_LEVEL,a.PERSON_GRADE, a.DATE_OF_BIRTH, '+
                    ' e.PERSONNEL_AREA_CODE,b.EMPLOYEE_SUB_GROUP_ID,a.DIRECTORATE,a.DIRECTORATE_CODE, '+
                    ' CONCAT(UPPER(LEFT(REPLACE(a.PERSONNEL_NUMBER , " ",""),2)),SUBSTRING(a.PREV_PERSNO, -4)) AS INITIAL'+
                    ' FROM tx_injourney_employee a '+
                    ' JOIN tx_employee_org b ON a.PREV_PERSNO=b.EMPLOYEE_ID AND b.EMPLOYEE_ORG_END_DATE=99991231 '+
                    ' JOIN ms_employee_group c ON b.EMPLOYEE_GROUP_ID=c.EMPLOYEE_GROUP_ID '+
                    ' JOIN ms_employee_sub_group d ON d.EMPLOYEE_SUB_GROUP_ID*1=b.EMPLOYEE_SUB_GROUP_ID*1 AND d.EMPLOYEE_GROUP_ID=c.EMPLOYEE_GROUP_ID '+
                    ' JOIN ms_personnel_area e ON b.BRANCH_ID=e.PERSONNEL_AREA_ID '+
                    ' WHERE a.PREV_PERSNO IN(20001320,20001714,20002138,20008132,20005269,20007869,20002113,20003066,'+
                    ' 20004813,20003934,20002471,20004877,20004891,20005666,20003837,20003128,20004896,20002606,20001121,'+
                    ' 20003701,20003825,20005680,20005663,20002894,20005667,20003704,20004843,20005196,20003963,20002892,'+
                    ' 20005686,20007354,20004836,20003765,20002344,20006791,20002677,20002883,20004868,20004895,20006100,'+
                    ' 20004812,20001292,20001341,20003962,20002183,20001743,20007353,20003477,20005674,20004064,20005107,'+
                    ' 20002099,20002043,20002044,20005203,20001325,20001437,20005145,20003142,20003114,20001210,20001434,'+
                    ' 20000451,20004894,20004890,20001336,20004870,20003886,20003736,20007544,20001886,20001995,20007352,'+
                    ' 20002622,20002078,20004846,20005660,20004904,20001996,20004574,20003531,20003815,20004831,20003135,'+
                    ' 20003125,20004881,20005661,20000973,20005181,20003540,20002903,20001998,20003754,20004850,20001581,'+
                    ' 20001213,20001226,20002523,20002795,20005305,20004580,20006071,20003220,20006296,20002359,20007361,'+
                    ' 20003791) ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findSpeakerexperience = async function (paramsEmployeeid) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT 	a.EMPLOYEE_ID,a.SPEAKER_EXPERIENCE_EVENT,a.SPEAKER_EXPERIENCE_ORGANIZER, '+
                    ' a.SPEAKER_EXPERIENCE_START_DATE,a.SPEAKER_EXPERIENCE_END_DATE, '+
                    ' a.SPEAKER_EXPERIENCE_LOCATION,a.NUMBER_OF_PARTICIPANTS '+
            ' FROM tx_speaker_experience a  '+
            ' WHERE md5(a.EMPLOYEE_ID)= :paramsEmployeeid ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findOrganizationinternal = async function (paramsEmployeeid) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT * FROM tx_organization WHERE md5(EMPLOYEE_ID)= :paramsEmployeeid AND ORGANIZATION_TYPE_ID=4 ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findOrganizationeksternal = async function (paramsEmployeeid) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT * FROM tx_organization WHERE md5(EMPLOYEE_ID)= :paramsEmployeeid AND ORGANIZATION_TYPE_ID<>4 ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findAssignmenthistory = async function (paramsEmployeeid) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT * FROM tx_npi p WHERE md5(p.EMPLOYEE_ID)= :paramsEmployeeid and p.SUBTYPE_NPI_ID="03" ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findAchievement = async function (paramsEmployeeid) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT * FROM tx_reward WHERE md5(EMPLOYEE_ID)= :paramsEmployeeid ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findPengalamankerja = async function (paramsEmployeeid) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT '+
                ' UPPER(SPK.WORKING_EXPERIENCE_INSTANCE) as WORKING_EXPERIENCE_INSTANCE, '+
                ' UPPER(ifnull(SPK.JOB_DESCRIPTION,"-")) as JOB_DESCRIPTION, '+
                ' UPPER(SPK.POSITION_NAME) as POSITION_NAME, '+
                ' UPPER(SPK.WORKING_EXPERIENCE_CITY) as WORKING_EXPERIENCE_CITY, '+
                ' SPK.WORKING_EXPERIENCE_START_DATE, '+
                ' SPK.WORKING_EXPERIENCE_END_DATE, '+
                ' UPPER(SMI.INDUSTRY_TYPE_NAME) as INDUSTRY_TYPE_NAME, '+
                ' UPPER(SMK.CONTRACT_TYPE_NAME) as CONTRACT_TYPE_NAME '+
            ' FROM tx_working_experience AS SPK '+
            ' INNER JOIN  ms_industry_type AS SMI ON SPK.INDUSTRY_TYPE_ID = SMI.INDUSTRY_TYPE_ID  '+
            ' INNER JOIN ms_contract_type AS SMK ON SPK.CONTRACT_TYPE_ID = SMK.CONTRACT_TYPE_ID  '+
            ' WHERE md5(EMPLOYEE_ID) = :paramsEmployeeid ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findHistoryteam = async function (paramsEmployeeid) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT '+
                ' UPPER(TEAM_HISTORY_NAME) as TEAM_HISTORY_NAME, '+
                ' UPPER(TEAM_HISTORY_MAIN_TASK) as TEAM_HISTORY_MAIN_TASK, '+
                ' UPPER(TEAM_HISTORY_POSITION) as TEAM_HISTORY_POSITION, '+
                ' UPPER(ifnull(TEAM_HISTORY_LOCATION,"-")) as TEAM_HISTORY_LOCATION, '+
                ' TEAM_HISTORY_START_DATE, '+
                ' TEAM_HISTORY_END_DATE '+
            ' FROM tx_team_history WHERE md5(EMPLOYEE_ID) = :paramsEmployeeid ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findPenugasan = async function (paramsEmployeeid) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT '+
                ' UPPER(POSITION_NAME) as POSITION_NAME, '+
                ' UPPER(JOB_DESCRIPTION) as JOB_DESCRIPTION, '+
                ' UPPER(ORGANIZATION_NAME) as ORGANIZATION_NAME, '+
                ' UPPER(LOCATION) as LOCATION, '+
                ' UPPER(AGENCY) as AGENCY, '+
                ' START_DATE, '+
                ' END_DATE '+
            ' FROM tx_assignment WHERE md5(EMPLOYEE_ID) = :paramsEmployeeid ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findHistoryjabatan = async function (paramsEmployeeid) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT '+
                ' UPPER(tx.POSITION_HISTORY_POSITION) as POSITION_HISTORY_POSITION, '+
                ' UPPER(tx.POSITION_HISTORY_UNIT) as POSITION_HISTORY_UNIT, '+
                ' UPPER(ms.PERSONNEL_AREA_CODE) as PERSONNEL_AREA_CODE, '+
                ' tx.POSITION_HISTORY_BEGIN_DATE, '+
                ' tx.POSITION_HISTORY_END_DATE, '+
                ' ms.PERSONNEL_AREA_NAME '+
            ' FROM tx_position_history tx '+
            ' JOIN ms_personnel_area ms ON tx.BRANCH_ID = ms.PERSONNEL_AREA_ID '+
            ' WHERE md5(EMPLOYEE_ID) = :paramsEmployeeid '+
            ' order by POSITION_HISTORY_BEGIN_DATE desc ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findStrength = async function (paramsEmployeeid) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT * FROM tx_perception WHERE md5(EMPLOYEE_ID)= :paramsEmployeeid AND PERCEPTION_TYPE_ID=1 ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findLicense = async function (paramsEmployeeid) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT * FROM tx_license WHERE md5(EMPLOYEE_ID)= :paramsEmployeeid ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findDiklatexternal = async function (paramsEmployeeid) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT '+
                ' UPPER(INFORMAL_EDUCATION_NAME) as INFORMAL_EDUCATION_NAME, '+
                ' UPPER(INFORMAL_EDUCATION_INSTITUTION) as INFORMAL_EDUCATION_INSTITUTION, '+
                ' UPPER(INFORMAL_EDUCATION_CITY) as INFORMAL_EDUCATION_CITY, '+
                ' INFORMAL_EDUCATION_START_DATE, '+
                ' INFORMAL_EDUCATION_END_DATE, '+
                ' UPPER(COUNTRY_NAME) as COUNTRY_NAME '+
                ' FROM tx_informal_education e  '+
                ' LEFT JOIN ms_country c ON c.COUNTRY_ID = e.INFORMAL_EDUCATION_COUNTRY '+
                ' WHERE md5(e.EMPLOYEE_ID)= :paramsEmployeeid ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findDiklatnonmanagerial = async function (paramsEmployeeid) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT '+
                ' UPPER(FORMAL_EDUCATION_COURSE_NAME) as FORMAL_EDUCATION_COURSE_NAME, '+
                ' UPPER(FORMAL_EDUCATION_INSTITUTION) as FORMAL_EDUCATION_INSTITUTION, '+
                ' UPPER(COUNTRY_NAME) as COUNTRY_NAME, '+
                ' FORMAL_EDUCATION_START_DATE, '+
                ' FORMAL_EDUCATION_END_DATE, '+
                ' UPPER(FORMAL_EDUCATION_LOCATION) as FORMAL_EDUCATION_LOCATION '+
                ' FROM  '+
                    ' (SELECT * FROM tx_formal_education '+
                        ' WHERE md5(EMPLOYEE_ID)= :paramsEmployeeid AND SUBTYPE_EDUCATION_ID="03") a '+
                        ' LEFT JOIN ms_country c ON c.COUNTRY_ID = a.COUNTRY_ID ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findDiklatmanagerial = async function (paramsEmployeeid) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT '+
                ' UPPER(FORMAL_EDUCATION_COURSE_NAME) as FORMAL_EDUCATION_COURSE_NAME, '+
                ' UPPER(FORMAL_EDUCATION_INSTITUTION) as FORMAL_EDUCATION_INSTITUTION, '+
                ' UPPER(COUNTRY_NAME) as COUNTRY_NAME, '+
                ' FORMAL_EDUCATION_START_DATE, '+
                ' FORMAL_EDUCATION_END_DATE, '+
                ' UPPER(FORMAL_EDUCATION_LOCATION) as FORMAL_EDUCATION_LOCATION '+
            ' FROM  '+
                ' (SELECT * FROM tx_formal_education '+
                    ' WHERE md5(EMPLOYEE_ID)= :paramsEmployeeid AND SUBTYPE_EDUCATION_ID="02") a '+
                    ' LEFT JOIN ms_country c ON c.COUNTRY_ID = a.COUNTRY_ID ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.findFormaleducation = async function (paramsEmployeeid) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT UPPER(LEVEL_NAME_2) as LEVEL_NAME, '+
                ' UPPER(FORMAL_EDUCATION_INSTITUTION) as FORMAL_EDUCATION_INSTITUTION, '+
                ' FORMAL_EDUCATION_END_DATE, '+
                ' FORMAL_EDUCATION_START_DATE, '+
                ' UPPER(FORMAL_EDUCATION_ACHIEVEMENT) as FORMAL_EDUCATION_ACHIEVEMENT, '+
                ' UPPER(COUNTRY_NAME) as COUNTRY_NAME, '+
                ' UPPER(FORMAL_EDUCATION_LOCATION) as FORMAL_EDUCATION_LOCATION, '+
                ' UPPER(d.DEPARTMENT_NAME) as DEPARTMENT_NAME, '+
                ' FORMAL_EDUCATION_GPA, '+
                ' FORMAL_EDUCATION_ID, '+
                ' ifnull(FORMAL_EDUCATION_ACHIEVEMENT,"-") as FORMAL_EDUCATION_ACHIEVEMENT, '+
                ' a.COUNTRY_ID, '+
                ' LEVEL_CODE, '+
                ' a.DEPARTMENT_ID, '+
                ' a.OTHER_DEPARTMENT, '+
                ' (SELECT FORMAL_EDUCATION_FILE_PATH '+
                    ' FROM tx_formal_education_file '+
                    ' WHERE FORMAL_EDUCATION_ID=a.FORMAL_EDUCATION_ID '+
                    ' AND FORMAL_EDUCATION_FLAG_FILE=1) IJAZAH_PATH, '+
                ' (SELECT FORMAL_EDUCATION_FILE_PATH '+
                    ' FROM tx_formal_education_file '+
                    ' WHERE FORMAL_EDUCATION_ID=a.FORMAL_EDUCATION_ID '+
                    ' AND FORMAL_EDUCATION_FLAG_FILE=2) TRANSKRIP_PATH '+
        ' FROM tx_formal_education a '+
        ' LEFT JOIN ms_education_level l ON a.BRANCH_STUDY_ID = l.LEVEL_CODE '+
        ' LEFT JOIN ms_country c ON c.COUNTRY_ID = a.COUNTRY_ID '+
        ' LEFT JOIN ms_department d ON d.DEPARTMENT_ID = a.DEPARTMENT_ID '+
        ' WHERE l.LEVEL_CODE >= 3  '+
        ' AND md5(a.EMPLOYEE_ID)= :paramsEmployeeid AND a.SUBTYPE_EDUCATION_ID="01" and a.IS_DATA_SAP="y" '+
        ' ORDER BY ORDER_NUMBER ',{
            // The type of query you are executing. The query type affects how results are formatted before they are passed back.
            replacements: {paramsEmployeeid},
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

module.exports = model;