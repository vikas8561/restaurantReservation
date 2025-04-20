const express = require("express");
const send_reservation = require("../controller/reservation");

const router = express.Router();

router.post("/send", send_reservation);

module.exports = router;