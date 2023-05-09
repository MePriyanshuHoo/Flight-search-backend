const express = require("express");
const Amadeus = require("amadeus");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path: "src/config/config.env"});
}

// intializing amadeus API
const amadeus = new Amadeus({ 
    clientId: process.env.API_KEY,
    clientSecret: process.env.API_SECRET,
});
 
// using middlewares
app.use(cors({
    origin: "http://localhost:3000",
}));
app.use(express.json());
app.use(bodyParser.json());

//imporing routes
const searchRoutes = require("./routes/Search");

//using routes
app.use("/api/", searchRoutes);

module.exports = amadeus;
module.exports = app;