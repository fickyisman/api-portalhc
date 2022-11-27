const { dbPortalhc } = require("../config/dbConnection.config");
const { QueryTypes } = require('sequelize');
const model = {};

model.getArea = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT AREA_ID,CODE_AREA,NAME_AREA,NAME_ALIAS,REGION, '+
                ' CAT,CODE_SUBHOLDING,IS_MEMBER '+
                ' FROM ms_injourney_area ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getDirectorate = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT DIRECTORATE_ID,CODE_DIRECTORATE,NAME_DIRECTORATE, '+
                ' CODE_SUBHOLDING,CODE_AREA '+
                ' FROM ms_injourney_directorate ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getGrade = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT GRADE_ID,GRADE_MIN,GRADE_MAX, '+
                ' GRADE_NOTES '+
                ' FROM ms_injourney_grade ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getPositionlevel = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT POSITION_LEVEL_ID,CODE_POSITION_LEVEL,NAME_POSITION_LEVEL '+
                ' FROM ms_injourney_position_level ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getPositiontype = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT POSITION_TYPE_ID,CODE_POSITION_TYPE,NAME_POSITION_TYPE '+
                ' FROM ms_injourney_position_type ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getJobfamily = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT JOBFAMILY_ID,CODE_JOB_FAMILY,NAME_JOB_FAMILY '+
                ' FROM ms_injourney_jobfamily ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getCompetency = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT COMPETENCY_ID,CODE_SUBHOLDING,COMPETENCY_CODE, '+
                ' CODE_ALIGN,COMPETENCY_TYPE,COMPETENCY_NAME '+
                ' FROM ms_injourney_competency ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getDivision = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT DIVISION_ID,CODE_DIVISION,NAME_DIVISION,CODE_GROUP, '+
                ' CODE_SUBHOLDING,CODE_AREA,CODE_DIRECTORATE '+
                ' FROM ms_injourney_division ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getGroup = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT GROUP_ID,CODE_GROUP,NAME_GROUP,CODE_SUBHOLDING, '+
                ' CODE_DIRECTORATE,CODE_AREA '+
                ' FROM ms_injourney_group ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getPositionAll = async function (search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT count(*) as tot '+
                ' FROM ms_injourney_position '+
                ' WHERE	CODE_POSITION LIKE :search 		        OR NAME_POSITION LIKE :search '+
                        ' OR CODE_POSITION_TYPE LIKE :search	    OR POSITION_TYPE LIKE :search '+
                        ' OR CODE_POSITION_LEVEL LIKE :search	    OR POSITION_LEVEL LIKE :search '+
                        ' OR AREA LIKE :search					OR CODE_DIVISION LIKE :search '+
                        ' OR DIVISION_NAME LIKE :search			OR CODE_GROUP LIKE :search '+
                        ' OR GROUP_NAME LIKE :search			    OR CODE_DIRECTORATE LIKE :search '+
                        ' OR DIRECTORATE_NAME LIKE :search		OR CODE_JOB_FAMILY LIKE :search '+
                        ' OR CODE_JOB_FAMILY_2 LIKE :search	    OR CODE_JOB_FAMILY_3 LIKE :search '+
                        ' OR JOB_FAMILY_ASAL LIKE :search		    OR JOB_FAMILY_ASAL_2 LIKE :search '+
                        ' OR JOB_FAMILY_ASAL_3 LIKE :search	    OR JOB_CLUSTER LIKE :search '+
                        ' OR ORG_LEVEL LIKE :search				OR BAND_MIN LIKE :search '+
                        ' OR BAND_MAX LIKE :search				OR BAND_NOTES LIKE :search '+
                        ' OR BAND_ALIGN LIKE :search			    OR GRADE_MIN LIKE :search '+
                        ' OR GRADE_MAX LIKE :search				OR GRADE_NOTES LIKE :search '+
                        ' OR GRADE_ALIGN_MIN LIKE :search		    OR GRADE_ALIGN_MAX LIKE :search '+
                        ' OR GRADE_ALIGN_NOTES LIKE :search	    OR LINE_MANAGER LIKE :search '+
                        ' OR CODE_SUBHOLDING LIKE :search		    OR ACTIVE_NON_ACTIVE LIKE :search '+
                        ' OR JOB_FAMILY_NOTES LIKE :search '
        ,
        {
            replacements: {
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getPosition = async function (mulai,panjang,search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT CODE_POSITION,NAME_POSITION,CODE_POSITION_TYPE,POSITION_TYPE, '+
                ' CODE_POSITION_LEVEL,POSITION_LEVEL,AREA,CODE_DIVISION,DIVISION_NAME, '+
                ' CODE_GROUP,GROUP_NAME,CODE_DIRECTORATE,DIRECTORATE_NAME,CODE_JOB_FAMILY, '+
                ' CODE_JOB_FAMILY_2,CODE_JOB_FAMILY_3,JOB_FAMILY_ASAL,JOB_FAMILY_ASAL_2,JOB_FAMILY_ASAL_3, '+
                ' JOB_CLUSTER,ORG_LEVEL,BAND_MIN,BAND_MAX,BAND_NOTES,BAND_ALIGN,GRADE_MIN,GRADE_MAX,GRADE_NOTES, '+
                ' GRADE_ALIGN_MIN,GRADE_ALIGN_MAX,GRADE_ALIGN_NOTES,LINE_MANAGER,CODE_SUBHOLDING,ACTIVE_NON_ACTIVE,JOB_FAMILY_NOTES '+
                ' FROM ms_injourney_position '+
                ' WHERE	CODE_POSITION LIKE :search 		        OR NAME_POSITION LIKE :search '+
                        ' OR CODE_POSITION_TYPE LIKE :search	    OR POSITION_TYPE LIKE :search '+
                        ' OR CODE_POSITION_LEVEL LIKE :search	    OR POSITION_LEVEL LIKE :search '+
                        ' OR AREA LIKE :search					OR CODE_DIVISION LIKE :search '+
                        ' OR DIVISION_NAME LIKE :search			OR CODE_GROUP LIKE :search '+
                        ' OR GROUP_NAME LIKE :search			    OR CODE_DIRECTORATE LIKE :search '+
                        ' OR DIRECTORATE_NAME LIKE :search		OR CODE_JOB_FAMILY LIKE :search '+
                        ' OR CODE_JOB_FAMILY_2 LIKE :search	    OR CODE_JOB_FAMILY_3 LIKE :search '+
                        ' OR JOB_FAMILY_ASAL LIKE :search		    OR JOB_FAMILY_ASAL_2 LIKE :search '+
                        ' OR JOB_FAMILY_ASAL_3 LIKE :search	    OR JOB_CLUSTER LIKE :search '+
                        ' OR ORG_LEVEL LIKE :search				OR BAND_MIN LIKE :search '+
                        ' OR BAND_MAX LIKE :search				OR BAND_NOTES LIKE :search '+
                        ' OR BAND_ALIGN LIKE :search			    OR GRADE_MIN LIKE :search '+
                        ' OR GRADE_MAX LIKE :search				OR GRADE_NOTES LIKE :search '+
                        ' OR GRADE_ALIGN_MIN LIKE :search		    OR GRADE_ALIGN_MAX LIKE :search '+
                        ' OR GRADE_ALIGN_NOTES LIKE :search	    OR LINE_MANAGER LIKE :search '+
                        ' OR CODE_SUBHOLDING LIKE :search		    OR ACTIVE_NON_ACTIVE LIKE :search '+
                        ' OR JOB_FAMILY_NOTES LIKE :search	'+
                ' ORDER BY CODE_POSITION asc '+
                ' limit :panjang offset :mulai',
        {
            replacements: {
                mulai : mulai,
                panjang :panjang,
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getPositionnofilter = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT CODE_POSITION,NAME_POSITION,CODE_POSITION_TYPE,POSITION_TYPE, '+
                ' CODE_POSITION_LEVEL,POSITION_LEVEL,AREA,CODE_DIVISION,DIVISION_NAME, '+
                ' CODE_GROUP,GROUP_NAME,CODE_DIRECTORATE,DIRECTORATE_NAME,CODE_JOB_FAMILY, '+
                ' CODE_JOB_FAMILY_2,CODE_JOB_FAMILY_3,JOB_FAMILY_ASAL,JOB_FAMILY_ASAL_2,JOB_FAMILY_ASAL_3, '+
                ' JOB_CLUSTER,ORG_LEVEL,BAND_MIN,BAND_MAX,BAND_NOTES,BAND_ALIGN,GRADE_MIN,GRADE_MAX,GRADE_NOTES, '+
                ' GRADE_ALIGN_MIN,GRADE_ALIGN_MAX,GRADE_ALIGN_NOTES,LINE_MANAGER,CODE_SUBHOLDING,ACTIVE_NON_ACTIVE,JOB_FAMILY_NOTES '+
                ' FROM ms_injourney_position ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeecertificateAll = async function (search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT count(*) as tot '+
                ' FROM ms_injourney_certificate '+
                ' WHERE CERTIFICATE_ID LIKE :search         OR  EMPLOYEE_ID LIKE :search '+
                '       OR CERTIFICATE_NAME LIKE :search    OR  CERTIFICATE_NUMBER LIKE :search '+
                '       OR INSTITUTION_NAME LIKE :search    OR  CERTIFICATION_TYPE LIKE :search '+
                '       OR COUNTRY LIKE :search             OR  START_DATE LIKE :search '+
                '       OR END_DATE LIKE :search            OR  CODE_SUBHOLDING LIKE :search ',
        {
            replacements: {
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeecertificate = async function (mulai,panjang,search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT CERTIFICATE_ID,EMPLOYEE_ID,CERTIFICATE_NAME,CERTIFICATE_NUMBER, '+
                ' INSTITUTION_NAME,CERTIFICATION_TYPE,COUNTRY,START_DATE,END_DATE,CODE_SUBHOLDING '+
                ' FROM ms_injourney_certificate '+
                ' WHERE CERTIFICATE_ID LIKE :search         OR  EMPLOYEE_ID LIKE :search '+
                '       OR CERTIFICATE_NAME LIKE :search    OR  CERTIFICATE_NUMBER LIKE :search '+
                '       OR INSTITUTION_NAME LIKE :search    OR  CERTIFICATION_TYPE LIKE :search '+
                '       OR COUNTRY LIKE :search             OR  START_DATE LIKE :search '+
                '       OR END_DATE LIKE :search            OR  CODE_SUBHOLDING LIKE :search '+
                ' ORDER BY CERTIFICATE_ID asc '+
                ' limit :panjang offset :mulai',
        {
            replacements: {
                mulai : mulai,
                panjang :panjang,
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeecertificatenofilter = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT CERTIFICATE_ID,EMPLOYEE_ID,CERTIFICATE_NAME,CERTIFICATE_NUMBER, '+
                ' INSTITUTION_NAME,CERTIFICATION_TYPE,COUNTRY,START_DATE,END_DATE,CODE_SUBHOLDING '+
                ' FROM ms_injourney_certificate ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeehukdisAll = async function (search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT count(*) as tot '+
                ' FROM ms_injourney_hukdis '+
                ' WHERE HUKDIS_ID LIKE :search           OR  EMPLOYEE_ID LIKE :search '+
                '       OR HUKDIS_CAT LIKE :search       OR  START_DATE LIKE :search '+
                '       OR END_DATE LIKE :search         OR  IS_ACTIVE LIKE :search '+
                '       OR CODE_SUBHOLDING LIKE :search  '+
                ' ORDER BY HUKDIS_ID asc ',
        {
            replacements: {
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeehukdis = async function (mulai,panjang,search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT HUKDIS_ID,EMPLOYEE_ID,HUKDIS_CAT,START_DATE, '+
                ' END_DATE,IS_ACTIVE,CODE_SUBHOLDING '+
                ' FROM ms_injourney_hukdis '+
                ' WHERE HUKDIS_ID LIKE :search           OR  EMPLOYEE_ID LIKE :search '+
                '       OR HUKDIS_CAT LIKE :search       OR  START_DATE LIKE :search '+
                '       OR END_DATE LIKE :search         OR  IS_ACTIVE LIKE :search '+
                '       OR CODE_SUBHOLDING LIKE :search  '+
                ' ORDER BY HUKDIS_ID asc '+
                ' limit :panjang offset :mulai ',
        {
            replacements: {
                mulai : mulai,
                panjang :panjang,
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeehukdisnofilter = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT HUKDIS_ID,EMPLOYEE_ID,HUKDIS_CAT,START_DATE, '+
                ' END_DATE,IS_ACTIVE,CODE_SUBHOLDING '+
                ' FROM ms_injourney_hukdis ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeetrainingAll = async function (search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT count(*) as tot '+
                ' FROM ms_injourney_training '+
                ' WHERE TRAINING_ID LIKE :search         OR  EMPLOYEE_ID LIKE :search '+
                '       OR TRAINING_NAME LIKE :search    OR  START_DATE LIKE :search '+
                '       OR END_DATE LIKE :search         OR  CITY LIKE :search '+
                '       OR TRAINING_ORG LIKE :search     OR  TRAINING_TYPE LIKE :search '+
                '       OR CODE_SUBHOLDING LIKE :search  ',
        {
            replacements: {
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeetraining = async function (mulai,panjang,search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT TRAINING_ID,EMPLOYEE_ID,TRAINING_NAME,START_DATE, '+
                ' END_DATE,CITY,COUNTRY,TRAINING_ORG,TRAINING_TYPE,CODE_SUBHOLDING '+
                ' FROM ms_injourney_training '+
                ' WHERE TRAINING_ID LIKE :search         OR  EMPLOYEE_ID LIKE :search '+
                '       OR TRAINING_NAME LIKE :search    OR  START_DATE LIKE :search '+
                '       OR END_DATE LIKE :search         OR  CITY LIKE :search '+
                '       OR TRAINING_ORG LIKE :search     OR  TRAINING_TYPE LIKE :search '+
                '       OR CODE_SUBHOLDING LIKE :search  '+
                ' ORDER BY TRAINING_ID asc '+
                ' limit :panjang offset :mulai ',
        {
            replacements: {
                mulai : mulai,
                panjang :panjang,
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeetrainingnofilter = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT TRAINING_ID,EMPLOYEE_ID,TRAINING_NAME,START_DATE, '+
                ' END_DATE,CITY,COUNTRY,TRAINING_ORG,TRAINING_TYPE,CODE_SUBHOLDING '+
                ' FROM ms_injourney_training ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getAssessmentresultAll = async function (search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT count(*) as tot '+
                ' FROM tx_injourney_assessment_result '+
                ' WHERE RESULT_ID LIKE :search          OR  EMPLOYEE_ID LIKE :search '+
                '       OR END_DATE LIKE :search        OR  START_DATE LIKE :search '+
                '       OR LEMBAGA_ASES LIKE :search    OR  HASIL_ASES LIKE :search '+
                '       OR POSITION_ASES LIKE :search ',
        {
            replacements: {
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getAssessmentresult = async function (mulai,panjang,search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT RESULT_ID,EMPLOYEE_ID,START_DATE,END_DATE, '+
                ' LEMBAGA_ASES,HASIL_ASES,POSITION_ASES '+
                ' FROM tx_injourney_assessment_result '+
                ' WHERE RESULT_ID LIKE :search          OR  EMPLOYEE_ID LIKE :search '+
                '       OR END_DATE LIKE :search        OR  START_DATE LIKE :search '+
                '       OR LEMBAGA_ASES LIKE :search    OR  HASIL_ASES LIKE :search '+
                '       OR POSITION_ASES LIKE :search '+
                ' ORDER BY RESULT_ID asc '+
                ' limit :panjang offset :mulai ',
        {
            replacements: {
                mulai : mulai,
                panjang :panjang,
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getAssessmentresultnofilter = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT RESULT_ID,EMPLOYEE_ID,START_DATE,END_DATE, '+
                ' LEMBAGA_ASES,HASIL_ASES,POSITION_ASES '+
                ' FROM tx_injourney_assessment_result ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeecompetencyAll = async function (search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT count(*) as tot '+
                ' FROM tx_injourney_competency '+
                ' WHERE COMPETENCY_ID LIKE :search                  OR  EMPLOYEE_ID LIKE :search '+
                '       OR PREV_EMPLOYEE_ID LIKE :search            OR  JABATAN_SAAT_ASES LIKE :search '+
                '       OR START_DATE LIKE :search                  OR  END_DATE LIKE :search '+
                '       OR LEMBAGA_ASES LIKE :search                OR  SOFT_COMPETENCY_ALIGN LIKE :search '+
                '       OR SOFT_COMPETENCY_MEMBER LIKE :search      OR  RESULT LIKE :search '+
                '       OR COMPETENCY_CLASSIFICATION LIKE :search   OR  CODE_SUBHOLDING LIKE :search '+
                '       OR DESC_1 LIKE :search                      OR  DESC_2 LIKE :search ',
        {
            replacements: {
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeecompetency = async function (mulai,panjang,search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT COMPETENCY_ID,EMPLOYEE_ID,PREV_EMPLOYEE_ID,JABATAN_SAAT_ASES, '+
                ' START_DATE,END_DATE,LEMBAGA_ASES,SOFT_COMPETENCY_ALIGN,SOFT_COMPETENCY_MEMBER, '+
                ' RESULT,COMPETENCY_CLASSIFICATION,CODE_SUBHOLDING,DESC_1,DESC_2 '+
                ' FROM tx_injourney_competency '+
                ' WHERE COMPETENCY_ID LIKE :search                  OR  EMPLOYEE_ID LIKE :search '+
                '       OR PREV_EMPLOYEE_ID LIKE :search            OR  JABATAN_SAAT_ASES LIKE :search '+
                '       OR START_DATE LIKE :search                  OR  END_DATE LIKE :search '+
                '       OR LEMBAGA_ASES LIKE :search                OR  SOFT_COMPETENCY_ALIGN LIKE :search '+
                '       OR SOFT_COMPETENCY_MEMBER LIKE :search      OR  RESULT LIKE :search '+
                '       OR COMPETENCY_CLASSIFICATION LIKE :search   OR  CODE_SUBHOLDING LIKE :search '+
                '       OR DESC_1 LIKE :search                      OR  DESC_2 LIKE :search '+
                ' ORDER BY COMPETENCY_ID asc '+
                ' limit :panjang offset :mulai ',
        {
            replacements: {
                mulai : mulai,
                panjang :panjang,
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeecompetencynofilter = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT COMPETENCY_ID,EMPLOYEE_ID,PREV_EMPLOYEE_ID,JABATAN_SAAT_ASES, '+
                ' START_DATE,END_DATE,LEMBAGA_ASES,SOFT_COMPETENCY_ALIGN,SOFT_COMPETENCY_MEMBER, '+
                ' RESULT,COMPETENCY_CLASSIFICATION,CODE_SUBHOLDING,DESC_1,DESC_2 '+
                ' FROM tx_injourney_competency ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeeperformanceAll = async function (search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT count(*) as tot '+
                ' FROM tx_injourney_performance '+
                ' WHERE PERFORMANCE_ID LIKE :search             OR  EMPLOYEE_ID LIKE :search '+
                '       OR YEAR LIKE :search                    OR  PERFORMANCE_SCALA LIKE :search '+
                '       OR PERFORMANCE_CATEGORY LIKE :search    OR  CODE_SUBHOLDING LIKE :search '+
                '       OR PERFORMANCE_NILAI LIKE :search       OR  PERFORMANCE_CATEGORY_ALIGN LIKE :search ',
        {
            replacements: {
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeeperformance = async function (mulai,panjang,search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT PERFORMANCE_ID,EMPLOYEE_ID,YEAR,PERFORMANCE_SCALA,PERFORMANCE_CATEGORY, '+
                ' CODE_SUBHOLDING,PERFORMANCE_NILAI,PERFORMANCE_CATEGORY_ALIGN '+
                ' FROM tx_injourney_performance '+
                ' WHERE PERFORMANCE_ID LIKE :search             OR  EMPLOYEE_ID LIKE :search '+
                '       OR YEAR LIKE :search                    OR  PERFORMANCE_SCALA LIKE :search '+
                '       OR PERFORMANCE_CATEGORY LIKE :search    OR  CODE_SUBHOLDING LIKE :search '+
                '       OR PERFORMANCE_NILAI LIKE :search       OR  PERFORMANCE_CATEGORY_ALIGN LIKE :search '+
                ' ORDER BY PERFORMANCE_ID asc '+
                ' limit :panjang offset :mulai ',
        {
            replacements: {
                mulai : mulai,
                panjang :panjang,
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeeperformancenofilter = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT PERFORMANCE_ID,EMPLOYEE_ID,YEAR,PERFORMANCE_SCALA,PERFORMANCE_CATEGORY, '+
                ' CODE_SUBHOLDING,PERFORMANCE_NILAI,PERFORMANCE_CATEGORY_ALIGN '+
                ' FROM tx_injourney_performance ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeeAll = async function (search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT count(*) as tot '+
                ' FROM tx_injourney_employee '+
                ' WHERE PERSONNEL_NUMBER LIKE :search           OR  PREVIOUS_PREV_PERSNO LIKE :search '+
                '       OR PREV_PERSNO LIKE :search             OR  POSITION LIKE :search '+
                '       OR POSITION_NAME LIKE :search           OR  CODE_SUBHOLDING LIKE :search '+
                '       OR JOB_TITLE LIKE :search               OR  DIRECTORATE LIKE :search '+
                '       OR DIRECTORATE_CODE LIKE :search        OR  `GROUP` LIKE :search '+
                '       OR GROUP_CODE LIKE :search              OR  DIVISION LIKE :search '+
                '       OR DIVISION_CODE LIKE :search           OR  INTEREST LIKE :search '+
                '       OR PERSONNEL_AREA_TEXT LIKE :search     OR  AREA_NOMENKLATUR LIKE :search '+
                '       OR GENDER_TEXT LIKE :search             OR  RELIGIOUS_DENOMINATION LIKE :search '+
                '       OR MARST LIKE :search                   OR  BIRTHPLACE LIKE :search '+
                '       OR DATE_OF_BIRTH LIKE :search           OR  MAJOR_NAME LIKE :search '+
                '       OR EDUCATION_LEVEL LIKE :search         OR  UNIVERSITY_NAME LIKE :search '+
                '       OR TANGGAL_MULAI_BEKERJA LIKE :search   OR  LINE_MANAGER LIKE :search '+
                '       OR LINE_MANAGER_NAME LIKE :search       OR  LINE_MANAGER_POSITION LIKE :search '+
                '       OR NO_KTP LIKE :search                  OR  EMAIL LIKE :search '+
                '       OR NO_HP LIKE :search                   OR  STATUS_AKTIF LIKE :search '+
                '       OR STATUS_KARYAWAN LIKE :search         OR  JOB_FAMILY LIKE :search '+
                '       OR JOB_FAMILY_ALIGN LIKE :search        OR  PERSON_GRADE LIKE :search '+
                '       OR PERSON_GRADE_ALIGN LIKE :search      OR  BAND_NAME LIKE :search '+
                '       OR BOD_TYPE LIKE :search                OR  JABFUNG LIKE :search '+
                '       OR HOME_ADDRESS LIKE :search            OR  NO_NPWP LIKE :search '+
                '       OR SOSMED_ADDRESS LIKE :search     ',
        {
            replacements: {
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployee = async function (mulai,panjang,search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT PERSONNEL_NUMBER,PREVIOUS_PREV_PERSNO,PREV_PERSNO,POSITION,POSITION_NAME,CODE_SUBHOLDING, '+
                ' JOB_TITLE,DIRECTORATE,DIRECTORATE_CODE,`GROUP`,GROUP_CODE,DIVISION,DIVISION_CODE,INTEREST, '+
                ' PERSONNEL_AREA_TEXT,AREA_NOMENKLATUR,GENDER_TEXT,RELIGIOUS_DENOMINATION,MARST,BIRTHPLACE, '+
                ' DATE_OF_BIRTH,MAJOR_NAME,EDUCATION_LEVEL,UNIVERSITY_NAME,TANGGAL_MULAI_BEKERJA,LINE_MANAGER, '+
                ' LINE_MANAGER_NAME,LINE_MANAGER_POSITION,NO_KTP,EMAIL,NO_HP,STATUS_AKTIF,STATUS_KARYAWAN,JOB_FAMILY, '+
                ' JOB_FAMILY_ALIGN,PERSON_GRADE,PERSON_GRADE_ALIGN,BAND_NAME,BOD_TYPE,JABFUNG,HOME_ADDRESS,NO_NPWP,SOSMED_ADDRESS '+
                ' FROM tx_injourney_employee '+
                ' WHERE PERSONNEL_NUMBER LIKE :search           OR  PREVIOUS_PREV_PERSNO LIKE :search '+
                '       OR PREV_PERSNO LIKE :search             OR  POSITION LIKE :search '+
                '       OR POSITION_NAME LIKE :search           OR  CODE_SUBHOLDING LIKE :search '+
                '       OR JOB_TITLE LIKE :search               OR  DIRECTORATE LIKE :search '+
                '       OR DIRECTORATE_CODE LIKE :search        OR  `GROUP` LIKE :search '+
                '       OR GROUP_CODE LIKE :search              OR  DIVISION LIKE :search '+
                '       OR DIVISION_CODE LIKE :search           OR  INTEREST LIKE :search '+
                '       OR PERSONNEL_AREA_TEXT LIKE :search     OR  AREA_NOMENKLATUR LIKE :search '+
                '       OR GENDER_TEXT LIKE :search             OR  RELIGIOUS_DENOMINATION LIKE :search '+
                '       OR MARST LIKE :search                   OR  BIRTHPLACE LIKE :search '+
                '       OR DATE_OF_BIRTH LIKE :search           OR  MAJOR_NAME LIKE :search '+
                '       OR EDUCATION_LEVEL LIKE :search         OR  UNIVERSITY_NAME LIKE :search '+
                '       OR TANGGAL_MULAI_BEKERJA LIKE :search   OR  LINE_MANAGER LIKE :search '+
                '       OR LINE_MANAGER_NAME LIKE :search       OR  LINE_MANAGER_POSITION LIKE :search '+
                '       OR NO_KTP LIKE :search                  OR  EMAIL LIKE :search '+
                '       OR NO_HP LIKE :search                   OR  STATUS_AKTIF LIKE :search '+
                '       OR STATUS_KARYAWAN LIKE :search         OR  JOB_FAMILY LIKE :search '+
                '       OR JOB_FAMILY_ALIGN LIKE :search        OR  PERSON_GRADE LIKE :search '+
                '       OR PERSON_GRADE_ALIGN LIKE :search      OR  BAND_NAME LIKE :search '+
                '       OR BOD_TYPE LIKE :search                OR  JABFUNG LIKE :search '+
                '       OR HOME_ADDRESS LIKE :search            OR  NO_NPWP LIKE :search '+
                '       OR SOSMED_ADDRESS LIKE :search     '+
                ' ORDER BY PERSONNEL_NUMBER asc '+
                ' limit :panjang offset :mulai ',
        {
            replacements: {
                mulai : mulai,
                panjang :panjang,
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeenofilter = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT PERSONNEL_NUMBER,PREVIOUS_PREV_PERSNO,PREV_PERSNO,POSITION,POSITION_NAME,CODE_SUBHOLDING, '+
                ' JOB_TITLE,DIRECTORATE,DIRECTORATE_CODE,`GROUP`,GROUP_CODE,DIVISION,DIVISION_CODE,INTEREST, '+
                ' PERSONNEL_AREA_TEXT,AREA_NOMENKLATUR,GENDER_TEXT,RELIGIOUS_DENOMINATION,MARST,BIRTHPLACE, '+
                ' DATE_OF_BIRTH,MAJOR_NAME,EDUCATION_LEVEL,UNIVERSITY_NAME,TANGGAL_MULAI_BEKERJA,LINE_MANAGER, '+
                ' LINE_MANAGER_NAME,LINE_MANAGER_POSITION,NO_KTP,EMAIL,NO_HP,STATUS_AKTIF,STATUS_KARYAWAN,JOB_FAMILY, '+
                ' JOB_FAMILY_ALIGN,PERSON_GRADE,PERSON_GRADE_ALIGN,BAND_NAME,BOD_TYPE,JABFUNG,HOME_ADDRESS,NO_NPWP,SOSMED_ADDRESS '+
                ' FROM tx_injourney_employee ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeepositionhistoryAll = async function (search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT count(*) as tot '+
                ' FROM tx_injourney_position_history '+
                ' WHERE POSITION_HISTORY_ID LIKE :search        OR  EMPLOYEE_ID LIKE :search '+
                '       OR EMPLOYEE_NAME LIKE :search           OR  START_DATE LIKE :search '+
                '       OR END_DATE LIKE :search                OR  URUT LIKE :search '+
                '       OR IS_CURRENT LIKE :search              OR  POSITION_NAME LIKE :search '+
                '       OR WORKING_UNIT LIKE :search            OR  DIVISION_NAME LIKE :search '+
                '       OR DIRECTORATE LIKE :search             OR  JOB_FAMILY LIKE :search '+
                '       OR BAND_NAME LIKE :search               OR  GRADE_NAME LIKE :search '+
                '       OR AREA_NAME LIKE :search               OR  CODE_SUBHOLDING LIKE :search '+
                '       OR CODE_JOB_FAMILY_ALIGN LIKE :search   OR  CODE_JOB_FAMILY_ALIGN_2 LIKE :search '+
                '       OR CODE_JOB_FAMILY_ALIGN_3 LIKE :search OR  JOB_FAMILY_ALIGN LIKE :search '+
                '       OR URAIAN_SINGKAT LIKE :search          OR  ACHIEVEMENT LIKE :search ',
        {
            replacements: {
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeepositionhistory = async function (mulai,panjang,search) {
    try {
        let sql = await dbPortalhc.query(
        'SELECT POSITION_HISTORY_ID,EMPLOYEE_ID,EMPLOYEE_NAME,START_DATE,END_DATE,URUT, '+
                ' IS_CURRENT,POSITION_NAME,WORKING_UNIT,DIVISION_NAME,DIRECTORATE,JOB_FAMILY,BAND_NAME,GRADE_NAME, '+
                ' AREA_NAME,CODE_SUBHOLDING,CODE_JOB_FAMILY_ALIGN,CODE_JOB_FAMILY_ALIGN_2,CODE_JOB_FAMILY_ALIGN_3, '+
                ' JOB_FAMILY_ALIGN,URAIAN_SINGKAT,ACHIEVEMENT '+
                ' FROM tx_injourney_position_history '+
                ' WHERE POSITION_HISTORY_ID LIKE :search        OR  EMPLOYEE_ID LIKE :search '+
                '       OR EMPLOYEE_NAME LIKE :search           OR  START_DATE LIKE :search '+
                '       OR END_DATE LIKE :search                OR  URUT LIKE :search '+
                '       OR IS_CURRENT LIKE :search              OR  POSITION_NAME LIKE :search '+
                '       OR WORKING_UNIT LIKE :search            OR  DIVISION_NAME LIKE :search '+
                '       OR DIRECTORATE LIKE :search             OR  JOB_FAMILY LIKE :search '+
                '       OR BAND_NAME LIKE :search               OR  GRADE_NAME LIKE :search '+
                '       OR AREA_NAME LIKE :search               OR  CODE_SUBHOLDING LIKE :search '+
                '       OR CODE_JOB_FAMILY_ALIGN LIKE :search   OR  CODE_JOB_FAMILY_ALIGN_2 LIKE :search '+
                '       OR CODE_JOB_FAMILY_ALIGN_3 LIKE :search OR  JOB_FAMILY_ALIGN LIKE :search '+
                '       OR URAIAN_SINGKAT LIKE :search          OR  ACHIEVEMENT LIKE :search '+
                ' ORDER BY POSITION_HISTORY_ID asc '+
                ' limit :panjang offset :mulai ',
        {
            replacements: {
                mulai : mulai,
                panjang :panjang,
                search : '%'+search+'%'
            },
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

model.getEmployeepositionhistorynofilter = async function () {
    try {
        let sql = await dbPortalhc.query(
        'SELECT POSITION_HISTORY_ID,EMPLOYEE_ID,EMPLOYEE_NAME,START_DATE,END_DATE,URUT, '+
                ' IS_CURRENT,POSITION_NAME,WORKING_UNIT,DIVISION_NAME,DIRECTORATE,JOB_FAMILY,BAND_NAME,GRADE_NAME, '+
                ' AREA_NAME,CODE_SUBHOLDING,CODE_JOB_FAMILY_ALIGN,CODE_JOB_FAMILY_ALIGN_2,CODE_JOB_FAMILY_ALIGN_3, '+
                ' JOB_FAMILY_ALIGN,URAIAN_SINGKAT,ACHIEVEMENT '+
                ' FROM tx_injourney_position_history ',
        {
            type: QueryTypes.SELECT
        });
        return sql;
    } catch (e) {
        // Log Errors
        throw Error(e)
    }
}

module.exports = model;