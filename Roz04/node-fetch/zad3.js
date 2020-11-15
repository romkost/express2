//npm i request
//https://npmjs.com/package/request

//ZADANIE 3 - NBP AI
// `http://api.nbp.pl/api/exchangerates/rates/a/${code}/`
const request = require('request');
const fs = require('fs');
const validCodes = ['usd', 'eur', 'gbp', 'chf'];

const code = process.argv[2];
const isValid = validCodes.find(currency => currency === code) ? true : false;
const url = `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`
console.log(url);

request(url, {json:true}, (err, res, body) => {
    console.log(body);
    if(err) {
        return console.log("Błąd: ", err);
    }
    if (res.statusCode !==200) {
        return console.log("coś poszło nie tak")
    }
    const msg = `Srednia cena ${body.currency} w dniu ${body.rates[0].effectiveDate} wynosi ${body.rates[0].mid}`
    fs.appendFile('waluty.txt', msg + '\n', (err) => {
        console.log("dane dodane do pliku")
    } )
    console.log(msg);
})