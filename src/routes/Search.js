const express = require("express");
const router = express.Router();
const controllers = require("../controllers/Search");

router.route("/city-search/:parameter").get(controllers.citySearch);
router.route("/flight-search").post(controllers.flighSearch);

router.route("/").get((req, res) => {
    res.send("Hello World");
});
module.exports = router; 