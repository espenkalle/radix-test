/*jslint node: true */
/*jshint esversion: 6 */

var express = require("express");
var router = express.Router();
var os = require("os");

/* GET home page. */

let quote = [
  "Knowledge comes, but wisdom lingers. - Alfred Lord Tennyson",
  "The past is a place we should learn from, not a place to call home. - Roy T. Bennet" ,
  "Where there is love there is life. - Mahatma Gandhi",
  "To love is risky. Not to love is foolish. - Maxime Lagacé",
];

router.get("/quote", function (req, res) {
  var responseObject = {
    val: quote[Math.floor(Math.random() * 4)],
  };

  res.set("Content-Type", "application/json");
  console.log("Sending response HUSTON ", responseObject);
  res.status(200).send(responseObject);
});

router.get("/healthz", function (req, res) {
  res.status(200).send();
});

router.get("/", function (req, res) {
  var responseObject = {
    RADIX_APP: process.env.RADIX_APP || "empty",
    RADIX_CLUSTERNAME: process.env.RADIX_CLUSTERNAME || "empty",
    RADIX_COMPONENT: process.env.RADIX_COMPONENT || "empty",
    RADIX_ENVIRONMENT: process.env.RADIX_ENVIRONMENT || "empty",
    HOSTNAME: os.hostname() || "empty",
    HOSTPLATFORM: os.platform() || "0",
  };

  res.set("Content-Type", "application/json");
  console.log("Sending response HUSTON ", responseObject);
  res.status(200).send(responseObject);
});

module.exports = router;
