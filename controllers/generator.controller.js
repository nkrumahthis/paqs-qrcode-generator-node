const { generateItems } = require("../lib/item.lib");
const { generateQRs } = require("../lib/qr.lib")
const { zipUp } = require("../lib/zip.lib")

async function post(req, res) {
    const data = req.body;

    const productName = data.productName;
    const companyName = data.companyName;
    const logo = data.logo;
    const mfgDate = data.mfgDate;
    const expDate = data.expDate;
    const quantity = data.quantity;
    const format = data.format;

    if (!validate(data)) {
        res.status(500).send({ "message": "invalid data entered. please check your post body" })
        return;
    }

    const itemIds = await generateItems(productName, companyName, logo, mfgDate, expDate, quantity);
    const qrImages = await generateQRs(itemIds, format);
    const zipFile = await zipUp(qrImages);

    res.sendFile(zipFile, err => {
        console.error(err)
    })
}

function validate(data) {
    if (data.format == "" || data.format == undefined) {
        console.error("data format absent")
        return false
    }
    return true;
}

module.exports.post = post;