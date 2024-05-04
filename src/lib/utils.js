const mongoose = require ("mongoose");

const connection = {};

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect("mongodb+srv://verwaerdeadrien:Sanada1122@cluster0.btbshng.mongodb.net/next-app?retryWrites=true&w=majority");
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};