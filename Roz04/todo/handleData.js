const colors = require('colors');
const fs = require('fs');

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

module.exports = handleData;