const { check } = require('express-validator');

tasklistKeyValidation = [
     check('tasklistKey', 'Please Provide Correct Tasklist ID !!!').isLength({ min: 32, max:32 })
]

//NIP VALIDATION 32 MD5 NIP
nipValidation = [
     check('employeeField', 'Please Provide Correct Employee ID !!!').isLength({ min: 32, max:32 })
]

//EMP ID VALIDATION NIP TANPA MD5
empidValidation = [
     check('employeeId', 'Please Provide Correct Employee ID !!!').isLength({ min: 8, max:8 })
]

approverValidation = [
     check('approver', 'Please Provide Correct Approver ID !!!').isLength({ min: 8, max:8 })
]

searchApprover = [
     check('searchApprover', 'Please Provide Correct Key !!!').not().isEmpty().isLength({ min: 3 })
]

kategoriValidation = [
     check('kategori', 'Please Provide Correct Kategori !!!').not().isEmpty()
]

kpiValidation = [
     check('typeKpi', 'Please Provide Correct Type KPI !!!').isIn([ 'KPI', 'NON' ])
]

workingValidation = [
     check('workingType', 'Please Provide Correct Type Working !!!').isIn([ 'WFA', 'WFO' ])
]

tasklistValidation = [
     check('tasklistArray.*', 'Please Provide Correct Tasklist ID !!!').not().isEmpty()
]

tasklistnewValidation = [
     check('tasklistNew', 'Please Provide Correct Tasklist !!!').not().isEmpty()
]

indicatoridValidation = [
     check('indicatorId', 'Please Provide Correct Indicator ID !!!').not().isEmpty()
]

dateValidation = [
     check('start', 'Please Provide Correct Date !!!').isDate().not().isEmpty(),
     check('end', 'Please Provide Correct Date !!!').isDate().not().isEmpty(),
     check('end').custom((value, { req }) => {
        if(new Date(value) < new Date(req.body.startDate)) {
            throw new Error ('End date of field must be valid and after startDate');
        }
        return true;
    })
]

userValidation = [
     check('user','Please Provide Email !!!').not().isEmpty()
]

singledateValidation = [
     check('date','Please Provide Correct Date !!! !!!').isDate().not().isEmpty()
]

passwordValidation = [
     check('password','Please Provide Password !!!').not().isEmpty()
]

const fieldValidation = {
     nipValidation: nipValidation,
     kategoriValidation: kategoriValidation,
     dateValidation: dateValidation,
     userValidation: userValidation,
     passwordValidation: passwordValidation,
     empidValidation: empidValidation,
     singledateValidation:singledateValidation,
     searchApprover: searchApprover,
     kpiValidation: kpiValidation,
     workingValidation: workingValidation,
     approverValidation: approverValidation,
     tasklistValidation: tasklistValidation,
     tasklistnewValidation: tasklistnewValidation,
     tasklistKeyValidation: tasklistKeyValidation,
     indicatoridValidation: indicatoridValidation
};

module.exports = fieldValidation;