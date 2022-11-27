var express = require('express');
var router = express.Router();
const cors = require('cors');
const controller = require("../controllers/index");
const { authJwt,fieldValidation } = require("../middlewares");

const allowedOrigins = [
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100',
];
  
// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
    callback(null, true);
    } else {
    callback(new Error('Origin not allowed by CORS'));
    }
},
};

/* GET home page. */
router.get('/', cors(corsOptions), function(req, res, next) {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify("Welcome !!! This Method is not allowed!!! API-PORTALHC-EXTERNAL"));
});

/* GET CALENDAR DATA ALL. */
router.post('/login', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    fieldValidation.userValidation,
    fieldValidation.passwordValidation,
    controller.stakeholder.checkLogin //LOAD CONTROLLER
);


module.exports = router;