"use strict";
var express = require("express"),
  bodyParser = require("body-parser"),
  // http = require("http"),
  // config = require("./config"),
  server = express(),
  mongoose = require("mongoose");
  // TeamInfo = require("./API/Models/TeamInfo"), //created model loading here
  // GameSchedule = require("./API/Models/GameSchedule");
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect(config.dbUrl);

mongoose
  .connect(
    "mongodb://ds233739.mlab.com:33739/nba",
    {
      auth: {
        user: "Sinlapakorn",
        password: "Si1ic0nVa11ay"
      },
      useNewUrlParser: true
    }
  )
  .then(() => console.log("connection successful"))
  .catch(err => console.log("err", err));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
var routes = require("./API/Routes/Routes"); //importing route
routes(server); //register the route
server.listen(process.env.PORT || 8000, function() {
  console.log(
    "Server is up and listening on port" + (process.env.PORT || 8000)
  );
});
