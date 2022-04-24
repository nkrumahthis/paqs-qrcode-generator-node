const post = (req, res) => {
    // const data = req.body;

    // const productName = data.productName;
    // const companyName = data.companyName;
    // const logo = data.logo;
    // const mfgDate = data.mfgDate;
    // const expDate = data.expDate;
    // const quantity = data.quantity;

    // const itemIds = await generateItems(productName, companyName, logo, mfgDate, expDate, quantity);
    // const qrImages = generateQRs(itemIds);
    // const zipFile = zipUp(qrImages);

    // res.sendFile(zipFile, err => {
    //     console.error(err)
    // })

    res.send("POST on /generator")
}

module.exports.post = post;