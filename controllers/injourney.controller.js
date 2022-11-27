const { validationResult } = require('express-validator');
const services = require("../services/index");
const controller = {};

controller.getMasterdata = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  try {
    let kategori = req.body.kategori;
    
   if(kategori=='position'){
      var datas = await services.injourney.positionInfonofilter()
    }else if(kategori=='employee_certificate'){
      var datas = await services.injourney.employeeCertificateInfonofilter()
    }else if(kategori=='employee_hukdis'){
      var datas = await services.injourney.employeehukdisInfonofilter()
    }else if(kategori=='employee_training'){
      var datas = await services.injourney.employeetrainingInfonofilter()
    }else if(kategori=='assessment_result'){
      var datas = await services.injourney.assessmentresultInfonofilter()
    }else if(kategori=='employee_competency'){
      var datas = await services.injourney.employeeCompetencyInfonofilter()
    }else if(kategori=='employee_performance'){
      var datas = await services.injourney.employeeperformanceInfonofilter()
    }else if(kategori=='employee'){
      var datas = await services.injourney.employeeInfonofilter()
    }else if(kategori=='employee_position_history'){
      var datas = await services.injourney.employeepositionhistoryInfonofilter()
    }
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200,
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMasterarea = async (req, res) => {
  try {
    var datas = await services.injourney.areaInfo()
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMasterdirectorate = async (req, res) => {
  try {
    var datas = await services.injourney.directorateInfo()
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMastergrade = async (req, res) => {
  try {
    var datas = await services.injourney.gradeInfo()
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMasterpositionlevel = async (req, res) => {
  try {
    var datas = await services.injourney.positionlevelInfo()
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMasterpositiontype = async (req, res) => {
  try {
    var datas = await services.injourney.positiontypeInfo()
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMasterjobfamily = async (req, res) => {
  try {
    var datas = await services.injourney.jobfamilyInfo()
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMastercompetency = async (req, res) => {
  try {
    var datas = await services.injourney.competencyInfo()
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMasterdivision = async (req, res) => {
  try {
    var datas = await services.injourney.divisionInfo()
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMastergroup = async (req, res) => {
  try {
    var datas = await services.injourney.groupInfo()
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMasterposition = async (req, res) => {
  try {
    // console.log(req.body.searchValue);
    let mulai = Number(req.body.start);
    let panjang = Number(req.body.length);
    let search = req.body.searchValue;
    let draws = req.body.draw;  
    
    var datas = await services.injourney.positionInfo(mulai,panjang,search)
    var allCount = await services.injourney.positionInfoAll(search)
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      draw: draws, 
      recordsTotal: allCount[0].tot, 
      recordsFiltered: allCount[0].tot, 
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMasteremployeecertificate = async (req, res) => {
  try {
    let mulai = Number(req.body.start);
    let panjang = Number(req.body.length);
    let search = req.body.searchValue;
    let draws = req.body.draw;
    
    var datas = await services.injourney.employeeCertificateInfo(mulai,panjang,search)
    var allCount = await services.injourney.employeeCertificateInfoAll(search)
    
    // console.log(allCount)
    return res.status(200).json({ 
      status: 200, 
      draw: draws, 
      recordsTotal: allCount[0].tot, 
      recordsFiltered: allCount[0].tot,
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMasteremployeehukdis = async (req, res) => {
  try {
    let mulai = Number(req.body.start);
    let panjang = Number(req.body.length);
    let search = req.body.searchValue;
    let draws = req.body.draw;

    var datas = await services.injourney.employeehukdisInfo(mulai,panjang,search)
    var allCount = await services.injourney.employeehukdisInfoAll(search)
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      draw: draws, 
      recordsTotal: allCount[0].tot, 
      recordsFiltered: allCount[0].tot,
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMasteremployeetraining = async (req, res) => {
  try {
    let mulai = Number(req.body.start);
    let panjang = Number(req.body.length);
    let search = req.body.searchValue;
    let draws = req.body.draw;

    var datas = await services.injourney.employeetrainingInfo(mulai,panjang,search)
    var allCount = await services.injourney.employeetrainingInfoAll(search)
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      draw: draws, 
      recordsTotal: allCount[0].tot, 
      recordsFiltered: allCount[0].tot,
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMasterassessmentresult = async (req, res) => {
  try {
    let mulai = Number(req.body.start);
    let panjang = Number(req.body.length);
    let search = req.body.searchValue;
    let draws = req.body.draw;

    var datas = await services.injourney.assessmentresultInfo(mulai,panjang,search)
    var allCount = await services.injourney.assessmentresultInfoAll(search)
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      draw: draws, 
      recordsTotal: allCount[0].tot, 
      recordsFiltered: allCount[0].tot,
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMasteremployeecompetency = async (req, res) => {
  try {
    let mulai = Number(req.body.start);
    let panjang = Number(req.body.length);
    let search = req.body.searchValue;
    let draws = req.body.draw;

    var datas = await services.injourney.employeeCompetencyInfo(mulai,panjang,search)
    var allCount = await services.injourney.employeeCompetencyInfoAll(search)
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      draw: draws, 
      recordsTotal: allCount[0].tot, 
      recordsFiltered: allCount[0].tot,
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMasteremployeeperformance = async (req, res) => {
  try {
    let mulai = Number(req.body.start);
    let panjang = Number(req.body.length);
    let search = req.body.searchValue;
    let draws = req.body.draw;

    var datas = await services.injourney.employeeperformanceInfo(mulai,panjang,search)
    var allCount = await services.injourney.employeeperformanceInfoAll(search)
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      draw: draws, 
      recordsTotal: allCount[0].tot, 
      recordsFiltered: allCount[0].tot,
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMasteremployee = async (req, res) => {
  try {
    let mulai = Number(req.body.start);
    let panjang = Number(req.body.length);
    let search = req.body.searchValue;
    let draws = req.body.draw;

    var datas = await services.injourney.employeeInfo(mulai,panjang,search)
    var allCount = await services.injourney.employeeInfoAll(search)
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      draw: draws, 
      recordsTotal: allCount[0].tot, 
      recordsFiltered: allCount[0].tot,
      data: datas, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getMasteremployeepositionhistory = async (req, res) => {
  try {
    let mulai = Number(req.body.start);
    let panjang = Number(req.body.length);
    let search = req.body.searchValue;
    let draws = req.body.draw;

    var datas = await services.injourney.employeepositionhistoryInfo(mulai,panjang,search)
    var allCount = await services.injourney.employeepositionhistoryInfoAll(search)
    
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      draw: draws, 
      recordsTotal: allCount[0].tot, 
      recordsFiltered: allCount[0].tot,
      data: datas, 
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