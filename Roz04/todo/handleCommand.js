const handleData = require('./handleData');


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

    module.exports = handleCommand;