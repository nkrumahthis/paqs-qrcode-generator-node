const qrcode = require("qrcode");

function generateQR(id) {
    return ""; // return an image bitstream
}

function generateQRs(ids) {
    let qrs = [];

    ids.array.forEach(id => {
        qrs.push(generateQR(id));
    });

    return qrs; // return array of images bitstreams
}

module.exports.generateQRs = generateQRs;