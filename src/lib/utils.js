const mongoose = require ("mongoose");
require('dotenv').config();

const mongoURI = "mongodb://127.0.0.1:27017/next-app";
const connection = {};

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect(mongoURI).connection;
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};