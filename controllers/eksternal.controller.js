const { validationResult } = require('express-validator');
const services = require("../services/index");
const md5 = require('md5');
const controller = {};

controller.checkLogin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors.array() });
    return;
  }
  
  try {
    let user = req.body.user;
    let password = req.body.password;
    var result = await services.stakeholder.getUserbyemail(user);

    if (!result.length) {
      return res.status(401).send({
          msg: 'User is not registered !!!'
      });
    }

    if(md5(password) == result[0]['PASSWORD']){
      var token = await services.stakeholder.signJwt(result[0]);
      return res.status(200).json({ 
        msg: 'Logged in!',
        token,
        user: result[0]
      });
    }else{
      return res.status(401).send({
        msg: 'Password is incorrect !!!'
      });
    }
  } catch (error) {
    return res.status(400).json({ 
      status: 400, 
      message: error.message 
    });
  }
};
  
module.exports = controller;