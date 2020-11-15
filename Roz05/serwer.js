//powershell -ExecutionPolicy Bypass -File C:\Users\Roman\AppData\Roaming\npm\nodemon.ps1
const http = require('http');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {

    console.log(req.url);
    //console.log(req.method);

    if (req.url === "/") {
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'})
        res.end("<h1>Strona główna</h1>")
    } else if (req.url === "/users") {
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'})
        res.end("<h2>Strona uzytkowników</h2>")
    } else {
        res.writeHead(404, {'Content-Type' : 'text/html; charset=utf-8'})
        res.end("<p>Brak strony o podanym adresie</p>")
    }

    
    //res.end(`<h1>${req.url}</h1>`)
    }).listen(port, '127.0.0.1', () => {
        console.log(`Nasz serwer nasluchuje na porcie ${port}`)
    })