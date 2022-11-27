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
    res.send(JSON.stringify("Welcome !!! This Method is not allowed!!! API-PORTALHC-EMPLOYEE"));
});

/* GET PERSONAL INFO. */
router.post('/personalInfo', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.nipValidation, //VALIDASI FIELD NIP
    controller.employee.getPersonalinfo //LOAD CONTROLLER
);

/* GET PERSONNAL SUMMARY. */
router.post('/personalSummary', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.nipValidation, //VALIDASI FIELD NIP
    controller.employee.getPersonalsummary //LOAD CONTROLLER
);

/* GET PERSONNAL EDUCATION. */
router.post('/personalEducation', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.nipValidation, //VALIDASI FIELD NIP
    controller.employee.getPersonaleducation //LOAD CONTROLLER
);

/* GET PERSONNAL STRENGTH. */
router.post('/personalStrength', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.nipValidation, //VALIDASI FIELD NIP
    controller.employee.getPersonalstrength //LOAD CONTROLLER
);

/* GET PERSONNAL POSITION HISTORY. */
router.post('/personalPositionhistory', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.nipValidation, //VALIDASI FIELD NIP
    controller.employee.getPersonalpositionhistory //LOAD CONTROLLER
);

/* GET PERSONNAL ACHIEVEMENT. */
router.post('/personalAchievement', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.nipValidation, //VALIDASI FIELD NIP
    controller.employee.getPersonalachievement //LOAD CONTROLLER
);

/* GET PERSONNAL ASSIGNMENT HISTORY. */
router.post('/personalAssignmenthistory', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.nipValidation, //VALIDASI FIELD NIP
    controller.employee.getPersonalassignmenthistory //LOAD CONTROLLER
);

/* GET PERSONNAL SPEAKER EXPERIENCE. */
router.post('/personalSpeakerexperience', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.nipValidation, //VALIDASI FIELD NIP
    controller.employee.getPersonalspeakerexperience //LOAD CONTROLLER
);

/* GET PERSONNAL SPEAKER EXPERIENCE. */
router.post('/personalOrganization', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.nipValidation, //VALIDASI FIELD NIP
    controller.employee.getPersonalorganization //LOAD CONTROLLER
);

/* GET EMPLOYEE NOMINATIF. */
router.post('/nominatif', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.employee.getEmployeenominatif //LOAD CONTROLLER
);

module.exports = router;