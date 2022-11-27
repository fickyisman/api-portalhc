const { validationResult } = require('express-validator');
const services = require("../services/index");

const controller = {};

controller.getStatistic = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  try {
    let decodeToken = req.decoded;
    let empId = decodeToken.nip;
    let date = req.body.date;

    var todayTasklist = await services.diana.tasklistBydate(empId,date)
    var asLeader = await services.diana.findLeader(empId)
    var accessTime = await services.diana.accessTime()
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: {
              asLeader,
              accessTime,
              todayTasklist
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
  
controller.getApproverdefault = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  try {
    let decodeToken = req.decoded;
    let empId = decodeToken.nip;

    var approver = await services.diana.approverBydefault(empId);
    var defaultTasklist = await services.diana.defaultIndicator();
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: {
              approver,
              defaultTasklist
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
  
controller.getApproverother = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  try {
    let decodeToken = req.decoded;
    let empId = decodeToken.nip;
    let key = req.body.searchApprover;

    var approver = await services.diana.approverByother(empId,key)
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: approver, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};


controller.getMyTeam = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  try {
    let decodeToken = req.decoded;
    let empId = decodeToken.nip;
    let unitCode = decodeToken.unit_code;
    let date = req.body.date;

    var myTeam = await services.diana.myTeam(empId,unitCode,date)
    
    console.log(empId)
    return res.status(200).json({ 
      status: 200, 
      data: myTeam, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};

controller.getKpi = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  try {
    // let decodeToken = req.decoded;
    // let empId = decodeToken.nip;
    // let unitCode = decodeToken.unit_code;
    // let key = req.body.searchApprover;

    var kpi = await services.diana.kpi()
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: kpi, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getNotif= async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  try {
    let decodeToken = req.decoded;
    let empId = decodeToken.nip;

    var notif = await services.diana.notif(empId)
    
    console.log(empId)
    return res.status(200).json({ 
      status: 200, 
      data: notif, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};

controller.postNewtasklist = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  try {
    let decodeToken = req.decoded;
    let empId = decodeToken.nip;
    let orgCode = decodeToken.organization_code;
    let tasklistNew = req.body.tasklistNew;

    var insertTasklist = await services.diana.postNewtasklist(empId,tasklistNew,orgCode)
    .then(function(clientInsertId){
      return res.status(200).json({ 
        status: 200, 
        data: {
                'INDICATOR_ID' : clientInsertId[0],
                'INDICATOR_DESC' : tasklistNew
              }, 
        message: "Succesfully Insert" 
      });
    })
    
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.postTasklist = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  try {
    let decodeToken     = req.decoded;
    let empId           = decodeToken.nip;
    let approver        = req.body.approver;
    let startDate       = req.body.start;
    let endDate         = req.body.end;
    let typeKpi         = req.body.typeKpi;
    let workingType     = req.body.workingType;
    let tasklistArray   = req.body.tasklistArray;
        
    let dnow            = new Date();
    let dstart          = new Date(startDate);
    let dend            = new Date(endDate);
    let sTime           = dstart.getTime();
    let eTime           = dend.getTime();
    let nTime           = dnow.getTime();
    let statusTasklist  = 99;
    
    if(sTime >= nTime){
      statusTasklist = 1;
    }else{
      statusTasklist = 3;
    }

    var insertHeader = await services.diana.postHeadertasklist(startDate,endDate,approver,statusTasklist,workingType,empId,tasklistArray,dnow,dstart,dend,typeKpi)
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200,  
      data:true,
      message: "Succesfully Submit!!!" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.tasklistBydate = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  try {
    let decodeToken     = req.decoded;
    let empId           = decodeToken.nip;
    let date            = req.body.date;
        
    var tasklist = await services.diana.tasklistBydate(empId,date)
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200,  
      data: {
              tasklist
            },
      message: "Succesfully Submit!!!" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.masterActivity = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  try {
        
    var defaultActivity = await services.diana.defaultActivity()
    var achievement = await services.diana.achievement()
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200,  
      data: {
              defaultActivity,
              achievement
            },
      message: "Succesfully Submit!!!" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.deleteTasklist = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  try {

    let tasklistKey = req.body.tasklistKey;
    let indicatorId = req.body.indicatorId;
        
    var deleteTask = await services.diana.deleteTasklist(tasklistKey,indicatorId)
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200,  
      data: deleteTask,
      message: "Succesfully Submit!!!" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
module.exports = controller;