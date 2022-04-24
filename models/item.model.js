const { default: mongoose } = require("mongoose");

const itemSchema = new mongoose.Schema({
    "productName": String,
    "companyName": String,
    "logo": String,
    "mfgDate": String,
    "expDate": String,
    "used": Boolean,
    "timestamp_created": String
});

module.exports = mongoose.model('Item', itemSchema);