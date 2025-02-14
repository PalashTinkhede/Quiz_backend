// const mongoose = require("mongoose");

import mongoose from 'mongoose';
// require("dotenv").config();

const DBURl = "mongodb+srv://palashtinkhede:yRlL0b5wqiLWbPN0@quizapp.vomxm.mongodb.net/"

export const connectToDB = () => {
    mongoose.connect(DBURl, {
    })
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((e) => {
        console.log("Error occurred while connecting to DB");
        console.error(e);
        // process.exit(1);
    });
};