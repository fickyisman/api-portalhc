const { validationResult } = require('express-validator');
const services = require("../services/index");
const controller = {};

controller.getPersonalinfo = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  try {
    let employeeField = req.body.employeeField;
    var datas = await services.employee.personalInfo(employeeField)
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
 
controller.getPersonalsummary = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  try {
    let employeeField = req.body.employeeField;
    var datas = await services.employee.personalSummary(employeeField)
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

controller.getPersonalstrength = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  try {
    let employeeField = req.body.employeeField;
    var datas = await services.employee.personalStrength(employeeField)
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

controller.getPersonalachievement = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  try {
    let employeeField = req.body.employeeField;
    var datas = await services.employee.personalAchievement(employeeField)
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

controller.getPersonalassignmenthistory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  try {
    let employeeField = req.body.employeeField;
    var datas = await services.employee.personalAssignmenthistory(employeeField)
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

controller.getPersonalspeakerexperience = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  try {
    let employeeField = req.body.employeeField;
    var datas = await services.employee.personalSpeakerexperience(employeeField)
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

controller.getPersonaleducation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  try {
    let employeeField = req.body.employeeField;
    var formalEdu = await services.employee.personalFormaleducation(employeeField)
    var diklatMng = await services.employee.personalDiklatmanagerial(employeeField)
    var diklatNonmng = await services.employee.personalDiklatnonmanagerial(employeeField)
    var diklatEx = await services.employee.personalDiklatexternal(employeeField)
    var lisence = await services.employee.personalLisence(employeeField)
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: {
              formalEducation : formalEdu,
              diklatManagerial : diklatMng,
              diklatNonmanagerial : diklatNonmng,
              diklatExternal : diklatEx,
              lisence : lisence}, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getPersonalorganization = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  try {
    let employeeField = req.body.employeeField;
    var internalOrg = await services.employee.personalInternalorg(employeeField)
    var eksternalOrg = await services.employee.personalEksternalorg(employeeField)
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: {
              organizationInternal : internalOrg,
              otganizationEksternal : eksternalOrg}, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
controller.getPersonalpositionhistory = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  try {
    let employeeField = req.body.employeeField;
    var hisJab = await services.employee.personalHistoryjabatan(employeeField)
    var pnugas = await services.employee.personalPenugasan(employeeField)
    var hisTim = await services.employee.personalHistoryteam(employeeField)
    var pengJa = await services.employee.personalPengalamankerja(employeeField)
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: {
              historyJabatan : hisJab,
              penugasan : pnugas,
              historyTeam : hisTim,
              pengalamanKerja : pengJa}, 
      message: "Succesfully Retrieved" 
    });
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};

controller.getEmployeenominatif = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }

  try {
    var nominatif = await services.employee.employeeNominatif()
    // console.log(statInyear)
    return res.status(200).json({ 
      status: 200, 
      data: nominatif, 
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