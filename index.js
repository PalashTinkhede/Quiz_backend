/* eslint-disable @typescript-eslint/no-var-requires */
// const express = require("express");
// const routes = require("./routes/routes");
// const cookieParser = require("cookie-parser");
// const database = require("./config/database");
// const cors = require("cors");

import express from 'express';
import routes from './routes/routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import { connectToDB } from './config/database.js';

const PORT =  4000;
const app = express();
// eslint-disable-next-line no-undef
// require('dotenv').config();



// connect to db
connectToDB();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
   origin: "http://localhost:5173"
    
 
  })
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Your server is up and running...",
  });
});

app.use("/api/v1/", routes);

// activate server
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
