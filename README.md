# PAQS QRCode Generator

QR code generator for the PAQS Project

## Set up

1. Clone this repo
2. run `npm install`
3. create a .env file the MONGO_URI set to your [connection string](https://www.mongodb.com/docs/manual/reference/connection-string/)

```env
MONGO_URI = mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
```

4. run `npm start`

## Usage

### Generate QR images

Send a `POST` request to `/generator` with following body

```JSON
{
    "productName" : "string",
    "companyName" : "string",
    "logo" : "",
    "mfgDate" : "31-12-2021",
    "expDate" : "31-12-2022",
    "quantity" : 3,
    "format" : "string"
}
```

And you will receive a zip file that you must download

## Done

- items data generated
- raw qr code image files generated. currently supports png and svg. not jpg
- zip file created with images

## Todo

- id is not yet all integers
- retrieve item data, given id
- log item usage using product id and user location
