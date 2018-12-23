"use strict";
// var express = require("express");
module.exports = function(app) {
  // var gameDataController = require("../Controllers/GameDataController");
  // var apiRoutes = express.Router();
  app.get("/", function(req, res) {
    res.send("We are happy to see you using Chat Bot Webhook");
  });
  // registerUser Route
  // app.route("/").post(gameDataController.processRequest);
  app.route("/").post(
    res.json({
      speech:
        "Last game between Kings and " +
        parameters.team +
        " was played on " +
        "25/11/2561" +
        " ." +
        "Kings won this match by 120 - 119",
      displayText:
        "Last game between Kings and " +
        parameters.team +
        " was played on " +
        "25/11/2561" +
        " ." +
        "Kings won this match by 120 - 119",
      source: "game schedule"
    })
  );
};
