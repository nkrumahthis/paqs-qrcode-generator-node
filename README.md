# PAQS QRCode Generator

QR code generator for the PAQS Project

## Set up

1. Clone this repo
2. run `npm install`
3. create a .env file with content like this

```env
MONGO_USER=username
MONGO_PASSWORD=password
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
