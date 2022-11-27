var express = require('express');
var router = express.Router();
const cors = require('cors');
const controller = require("../controllers/index");
const { authJwt,fieldValidation, decodedJwt } = require("../middlewares");

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
    res.send(JSON.stringify("Welcome !!! This Method is not allowed!!! API-PORTALHC-DIANA"));
});

/* GET STATISTIC DATA ALL. */
router.get('/statistic', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.singledateValidation,
    controller.diana.getStatistic //LOAD CONTROLLER
);

/* GET APPROVAL DEFAULT DATA ALL. */
router.get('/approverBydefault', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.diana.getApproverdefault //LOAD CONTROLLER
);

/* GET APPROVAL ANOTHER DATA ALL. */
router.get('/approverOther', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.searchApprover,
    controller.diana.getApproverother //LOAD CONTROLLER
);

/* GET MY TEAM DATA ALL. UDOO */
router.post('/myTeam', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.singledateValidation,
    controller.diana.getMyTeam //LOAD CONTROLLER
);

/* GET KPI DATA ALL. UDOO */
router.get('/kpi', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.diana.getKpi//LOAD CONTROLLER
);

/* GET notif DATA ALL. UDOO */
router.get('/notif', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.diana.getNotif//LOAD CONTROLLER
);

/* POST NEW TASKLISTDATA ALL. */
router.post('/insertTaskname', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.tasklistnewValidation,
    controller.diana.postNewtasklist //LOAD CONTROLLER
);

/* POST TASKLIST DATA ALL. */
router.post('/submitTasklist', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.dateValidation,
    fieldValidation.kpiValidation,
    fieldValidation.workingValidation,
    fieldValidation.approverValidation,
    fieldValidation.tasklistValidation,
    controller.diana.postTasklist //LOAD CONTROLLER
);

/* POST DELETE TASKLIST DATA ALL. */
router.post('/deleteTasklist', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.indicatoridValidation,
    fieldValidation.tasklistKeyValidation,
    controller.diana.deleteTasklist //LOAD CONTROLLER
);

/* GET TASKLIST BY DATE DATA ALL. */
router.get('/tasklistBydate', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    fieldValidation.singledateValidation,
    controller.diana.tasklistBydate //LOAD CONTROLLER
);

/* GET MASTER INPUT ACTIVITY DATA ALL. */
router.get('/masterActivity', 
    cors(corsOptions), //HANYA BISA DIAKSES HALAMAN TERTENTU
    [authJwt.verifyToken], //VERIFIKASI TOKEN JWT
    controller.diana.masterActivity //LOAD CONTROLLER
);


module.exports = router;