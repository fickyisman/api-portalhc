const { validationResult } = require('express-validator');
const services = require("../services/index");

const controller = {};

controller.getHoliday = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  try {
    let decodeToken = req.decoded;
    let empId = decodeToken.nip;
    let startDate = req.body.start;
    let endDate = req.body.end;

    var libur = await services.calendar.holiday(startDate,endDate)
    var cuti = await services.calendar.cuti(empId,startDate,endDate)
    var permit = await services.calendar.attendanceReq(empId,startDate,endDate)
    var spj = await services.calendar.spj(empId,startDate,endDate)
    var tasklist = await services.calendar.workingType(empId,startDate,endDate)
    var activity = await services.calendar.activity(empId,startDate,endDate)
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: {
              libur,
              cuti,
              permit,
              spj,
              tasklist,
              activity
            }, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getHolidayonly = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  try {
    let decodeToken = req.decoded;
    let empId = decodeToken.nip;
    let startDate = req.body.start;
    let endDate = req.body.end;

    var libur = await services.calendar.holiday(startDate,endDate)
    var cuti = await services.calendar.cuti(empId,startDate,endDate)
    var permit = await services.calendar.attendanceReq(empId,startDate,endDate)
    var spj = await services.calendar.spj(empId,startDate,endDate)
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: {
              libur,
              cuti,
              permit,
              spj
            }, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
module.exports = controller;