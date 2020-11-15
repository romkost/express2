//https://www.npmjs.com/package/minimist
//npm i minimist
//npm i colors
const parseArgs = require('minimist');
const colors = require('colors');
const fs = require('fs');
const { title } = require('process');

const command = parseArgs(process.argv.slice(2,3));
delete command._
//console.log(command);

const handleCommand = ({add, remove, list}) => {
console.log(add, remove, list);
if (add) {
    if(typeof add !== "string") {
        return console.log('wpisz nazwe dodawanego zadania (tekst!!!)'.red)
    } else if (add.length < 7) {
        return console.log('nazwa zadania musi miec wiecej niz 6 znakow'.red);
    }
    handleData(1, add); //1=type add , add=string

} else if (remove) {
    if(typeof remove !=="string" || remove.length < 7) {
        return console.log('wpisz nazwe usuwanego zadania. To musi byc tekst i musi miec wiecej niz 6 znakow'.red)
    }
    handleData(2, remove);

} else if (list || list === "") {
    handleData(3, null);

} else {
    console.log('nie rozumiem polecenia. Uzyj --add="nazwa zadania", --remove="nazwa zadania" lub opcji --list'.red);
}}


const handleData = (type, title) => {
    /// type - number (1-add; 2-remove; 3-list)
    /// title - (string || null)

    ////const data = fs.readFileSync('data.json', 'utf8')
    const data = fs.readFileSync('data.json')
    //let data = fs.readFileSync('data.json')
    //data = data.toString();
    //console.log(data);
    let tasks = JSON.parse(data)
    //console.log(tasks);

if (type === 1 || type ===2) {
    isExisted = tasks.find(task => task.title === title) ? true : false;
    if(type === 1 && isExisted) {
        return console.log("Takie zadanie juz istnieje".red);
    } else if (type === 2 && !isExisted) {
        return console.log("Nie moge usunac zadania, ktore nie istnieje".red);
    }
}

let dataJSON = "";
switch(type) {
    case 1:
        ///przebudowa tablicy
        tasks = tasks.map((task, index) => ({id: index + 1, title: task.title}))
        console.log('dodaje zadanie');
        const id = tasks.length + 1;
        tasks.push({id:id, title:title})
        dataJSON = JSON.stringify(tasks);
        fs.writeFileSync('data.json', dataJSON);
        console.log(`dodaje zadanie: ${title}`.white.bgGreen);
        break;
    
    case 2:
        const index = tasks.findIndex(task => task.title === title)
        console.log('usuwam zadanie');
        tasks.splice(index, 1);
        ///przebudowa tablicy
        tasks = tasks.map((task, index) => ({id: index + 1, title: task.title}))
        dataJSON = JSON.stringify(tasks)
        fs.writeFile('data.json', dataJSON, 'utf8', (err) => {
            if (err) throw err;
            console.log(`Zadanie ${title} zostalo usuniete`.white.bgGreen);
        })
        break; 
    
    case 3:
    console.log(`Lista zadan do zrobienia obejmuje ${tasks.length} pozycji. Do zrobienia masz:`);
    if (tasks.length) {
        tasks.forEach((task, index) => {
            if (index % 2) return console.log(task.title.green);
            return console.log(task.title.yellow);
        })
    }
    break; 
        
}


}

handleCommand(command);