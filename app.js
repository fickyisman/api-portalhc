var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")

var defaultRouter = require("./routes/index")
var employeeRouter = require("./routes/employee.routes")
var injourneyRouter = require("./routes/injourney.routes")
var calendarRouter = require("./routes/calendar.routes")
var eksternalRouter = require("./routes/eksternal.routes")
var dianaRouter = require("./routes/diana.routes")
const cors = require('cors');

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

var app = express()

// Enable preflight requests for all routes
app.options('*', cors(corsOptions));

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", defaultRouter)
app.use("/employee", employeeRouter)
app.use("/injourney", injourneyRouter)
app.use("/calendar", calendarRouter)
app.use("/stakeholder", eksternalRouter)
app.use("/diana", dianaRouter)

// console.log(`./.env.${process.env.NODE_ENV}`)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  //render pake view
  // res.status(err.status || 500)
  // res.render("error")

  //render pake json
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error Message";
  res.status(err.statusCode).json({
    message: err.message,
  });
})

module.exports = app