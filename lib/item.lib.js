const Item = require("../models/item.model");

async function generateItems(productName, companyName, logo, mfgDate, expDate, quantity) {
    const newItemIds = [];

    for (let index = 0; index < quantity; index++) {

        const newItem = new Item({
            "productName": productName,
            "companyName": companyName,
            "logo": logo,
            "mfgDate": mfgDate,
            "expDate": expDate,
            "used": false,
            "timestamp_created": getTimestamp()
        });
        await newItem.save();
        newItemIds.push(newItem.id);
    }

    return newItemIds;
}

async function logItemUsage(productId, userLocation) {

}

async function getItemData(productId, userLocation) {

}

function getTimestamp() {
    return (new Date()).toUTCString()
}

module.exports.getItemData = getItemData;
module.exports.generateItems = generateItems;
module.exports.logItemUsage = logItemUsage;
