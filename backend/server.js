const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const { errorMiddleware } = require("./middlewares/error");
const reservationRouter = require("./routes/reservationRoute");
const { dbConnection } = require("./database/dbConnection");
require('dotenv').config();
const app = express();


app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/reservation", reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})

dbConnection();

app.use(errorMiddleware);


app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})
