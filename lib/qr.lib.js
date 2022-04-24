const qrcode = require("qrcode");
const path = require('path');

async function generateQR(id, format) {
    // create qr image file
    const filepath = path.resolve(`dump/${id}.${format}`);
    await qrcode.toFile(filepath, id, options = {
        type: format
    }).catch((error) => {
        console.error(error)
    })
    return filepath; // return a filepath
}

async function generateQRs(ids, format) {
    let qrs = [];

    for (id of ids) {
        const qr = await generateQR(id, format);
        qrs.push(qr);
    };

    return qrs; // return array of images bitstreams
}

module.exports.generateQRs = generateQRs;