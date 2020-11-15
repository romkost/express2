//jak callback to asynchroniczność

const add = (x, y) => x + y;
const division = (number1, number2) => number1 / number2;

const math = (a, b, callback) => {
  console.log(callback(a, b))
};

math(3, 4, add);

setTimeout(() => console.log('Co słychać'), 2000);
console.log('Hej! ');

//fs - 'file system' - do odczyty plikow
const fs = require('fs');
// './ = ten sam katalog
fs.readFile('./text.txt', 'utf8', (error, file) => console.log(file));
console.log('przed odczytaniem pliku??')
