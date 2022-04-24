const express = require('express');
const checkerController = require('./controllers/checker.controller');
const generatorController = require('./controllers/generator.controller');
const homeController = require('./controllers/home.controller');
const { connectToDB } = require('./lib/database.lib');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", homeController.get);

app.get("/checker", checkerController.get);
app.post("/generator", generatorController.post)

async function main() {
    await connectToDB().catch(error => {
        console.error('error connecting to db', error.message)
    })

    app.listen(PORT, () => {
        console.log("PAQS-QRCode-Generator is listening on port " + PORT)
    });
}

main();
