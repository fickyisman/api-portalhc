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
    res.send(JSON.stringify("Welcome !!! This Method is not allowed!!! API-PORTALHC-INJOURNEY"));
});

/* GET MASTER DATA ALL. */
router.post('/masterData', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.kategoriValidation,
    controller.injourney.getMasterdata //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterArea', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMasterarea //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterDirectorate', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMasterdirectorate //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterGrade', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMastergrade //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterPositionlevel', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMasterpositionlevel //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterPositiontype', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMasterpositiontype //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterJobfamily', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMasterjobfamily //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterCompetency', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMastercompetency //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterDivision', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMasterdivision //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterGroup', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMastergroup //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterPosition', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMasterposition //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterEmployeecertificate', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMasteremployeecertificate //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterEmployeehukdis', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMasteremployeehukdis //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterEmployeetraining', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMasteremployeetraining //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterAssessmentresult', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMasterassessmentresult //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterEmployeecompetency', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMasteremployeecompetency //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterEmployeeperformance', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMasteremployeeperformance //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterEmployee', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMasteremployee //LOAD CONTROLLER
);

/* GET MASTER . */
router.post('/masterEmployeepositionhistory', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.injourney.getMasteremployeepositionhistory //LOAD CONTROLLER
);

module.exports = router;