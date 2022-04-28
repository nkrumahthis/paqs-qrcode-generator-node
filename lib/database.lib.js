const mongoose = require("mongoose");
require('dotenv').config();

async function connectToDB() {
    await mongoose.connect(process.env.MONGO_URI)
}

module.exports.connectToDB = connectToDB;