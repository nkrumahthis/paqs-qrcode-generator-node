const { getItemData, logItemUsage } = require("../lib/item.lib");

const get = async (req, res) => {
    // const requestData = req.body;

    const productId = requestData.productId;
    const userLocation = requestData.userLocation;

    // const itemData = await getItemData(productId);

    // await logItemUsage(productId, userLocation);

    // res.sendJson(itemData);

    res.send("GET on /checker")

}

module.exports.get = get;