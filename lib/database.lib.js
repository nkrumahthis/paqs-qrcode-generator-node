const mongoose = require("mongoose");
require('dotenv').config();

async function connectToDB() {
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.p5etw.mongodb.net/PAQS?retryWrites=true&w=majority`)
}

module.exports.connectToDB = connectToDB;