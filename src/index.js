// require('dotenv').config({path:'./env});

import dotenv from 'dotenv';
import connectionDB from "./db/db.js";

dotenv.config({ path: './env' })



connectionDB()

/* 
// iffe function database connection
import express from "express";
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_ATLAS_URL}/${DB_NAME}`);
        app.on("Error", (error) => {
            console.log("ERROR", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listing on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
})(); */