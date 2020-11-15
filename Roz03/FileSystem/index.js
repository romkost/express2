const fs = require('fs');

//ACCESS
//fs.access('./names.txt',fs.constants.F_OK, (err) => {
//    console.log(err ? "plik nie istnieje" : "plik istnieje");
//})

//fs.access('./zablokowany.txt',fs.constants.W_OK, (err) => {
//    console.log(err ? "plik nie mozna zapisywac" : "plik mozna zapisywac");
//})


//RENAME
//fs.rename('imiona.txt', "names.txt", (err)=>{
//    if(err) return console.log(err);
//    else console.log('nazwa zmieniona');
//})

//try {
//    fs.renameSync('uzytkownicy.txt', 'users.txt')
//}catch (err) {
//    console.log(err);
//}

//READDIR
//console.log(fs.readdirSync('./'));
//fs.readdir('./', (err, files) => {
//   if (err) return console.log('Blad: ', err);
//  console.log('Zawartosc: ', files);
//})

//READFILE
//fs.readFile('names.txt', 'utf8', (err, data) => {
//   if (err) throw Error(err)
//  console.log(data);
//})

//const names = fs.readFileSync('names.txt', 'utf8')
//console.log(names);

//let names="";
//try {
//names = fs.readFileSync('namesss.txt', 'utf8');
//} catch (err) {
//    names=false
//}
//console.log(names);

//WRITEFILE
//fs.writeFile('users.txt', "Nowy Plik2", (err) => {
//   if(err) console.log(err);
//    else console.log("udalo sie zapisac do pliku");

//fs.readFile('names.txt', 'utf8', (err, data) => {
//    if(err) return console.log('nie udalo sie');
//    fs.writeFile('users.txt', data, (err) => {
//        if(err) console.log(err);
//        else console.log('udalo sie zapisac do pliku');
//    })
//})

//APENDFILE
fs.readFile('names.txt', (err, data) => {
fs.appendFile('users.txt', data, (err) => {
        if(err) console.log(err);
        else console.log('udalo sie zapisac do pliku');
    })
})