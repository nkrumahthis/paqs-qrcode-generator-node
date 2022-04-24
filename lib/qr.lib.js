const qrcode = require("qrcode");
const path = require('path');

async function generateQR(id, format) {
    // create qr image file
    const filename = `${id}.${format}`
    const filepath = path.resolve(`dump/${filename}`);
    await qrcode.toFile(filepath, id, options = {
        type: format
    }).catch((error) => {
        console.error(error)
    })
    return filename; // return a filename
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