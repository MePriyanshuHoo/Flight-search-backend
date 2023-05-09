const express = require("express");
const Amadeus = require("amadeus");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
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

//imporing routesv
const detailsRoutes = require("./routes/Search");

app.get("/", (req, res) => {
    res.send('<h1>Hello World</h1>');
});
//using routes
app.use("/api/", detailsRoutes);


module.exports = app;