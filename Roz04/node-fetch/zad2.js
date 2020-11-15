//ZADANIE 2
// `http://numbersapi.com/${random}/${type}?json`
// console.log(process.arg[2]);
const fetch = require('node-fetch');

const arg = process.argv[2];
let type ="";

if (arg.indexOf("--year") === 0){
    console.log("szukamy informacji o roku ...");
    type = "year";
} else if (arg.indexOf("--math") === 0){
    console.log("szukamy informacji o liczbie ...");
    type = "math";
}  else if (arg.indexOf("--trivia") === 0){
    console.log("szukamy ciekawostki ...");
    type = "trivia";
} 

const equalSign = arg.search('=');
// console.log(equalSign); // podaje index liczac od 0 / -1 oznacza brak
if (equalSign === -1) console.log('nie wpisałeś liczby!')
//slice(index)
const number = arg.slice(equalSign + 1) || 1 // zabezpieczenie;
console.log(number);

if(number === "" || isNaN(Number(number))) {
console.log("to nie jest liczba");
process.exit();
}

fetch(`http://numbersapi.com/${number}/${type}?json`)
.then(res => {
    if(res.ok) {
return res.json()
    } else {
        throw new Error("ooo coś nie tak " + res.status)
    }
    console.log(res.status);
})
    
.then(res => console.log(res.text))
.catch(err => console.log("Błąd: ", err))