const ziplib = require('zip-lib')
const path = require('path')

async function zipUp(qrs) {
    const zip = new ziplib.Zip();
    qrs.forEach(qr => {
        zip.addFile(path.resolve(`dump/${qr}`));
    });

    const zipFileName = path.resolve(`dump/z${Date.now()}.zip`);

    await zip.archive(zipFileName).catch(error => {
        console.error(error);
    })

    return zipFileName;
}

module.exports.zipUp = zipUp;