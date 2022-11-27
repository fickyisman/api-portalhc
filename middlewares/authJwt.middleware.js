const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
// const db = require("../models");
// const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers.authorization.split(' ')[1]
  if(
      !req.headers.authorization ||
      !req.headers.authorization.startsWith('Bearer') ||
      !req.headers.authorization.split(' ')[1]
  ){
      return res.status(422).json({
      message: "Please provide the token",
      });
  }
  
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
        error : err
      });
    }
    req.decoded=decoded;
    next();
  });
};

// isAdmin = (req, res, next) => {
//   User.findByPk(req.userId).then(user => {
//     user.getRoles().then(roles => {
//       for (let i = 0; i < roles.length; i++) {
//         if (roles[i].name === "admin") {
//           next();
//           return;
//         }
//       }
//       res.status(403).send({
//         message: "Require Admin Role!"
//       });
//       return;
//     });
//   });
// };

const authJwt = {
  verifyToken: verifyToken
//   isAdmin: isAdmin,
};
module.exports = authJwt;