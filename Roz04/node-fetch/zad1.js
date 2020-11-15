// npmm init -y
// api.nbp.pl
// numbersapi.com/#42?json
// http://numbersapi.com/random/year?json
// npm i request
// npm i node-fetch
// Query string


//ZADANIE 1
const fetch = require('node-fetch');

//const year = process.argv[2]; //indeks 2 = 3 w kolejnosci elemnt
const year = process.argv[2] || Math.floor(Math.random() * 2020);
console.log(year); //node zad1.js PodajRok || lub node zad1.js

fetch(`http://numbersapi.com/${year}/year?json`)
//.then(response => response.json())
.then(response => {
   // console.log(response.status);
   // console.log(response.ok);
    return response.json()
})
.then(data => console.log(data.text))
.catch(error => console.log("error", error))

