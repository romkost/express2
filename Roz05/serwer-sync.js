const http = require('http');
const port = process.env.PORT || 3000;

let reqNumber = 0;
http.createServer((req, res) => {
    if(req.url === "/favicon.ico") {
        res.end();
        return;
    }

    reqNumber++
    for (let i = 0; i < 5000; i++) {
        console.log(reqNumber + "." + i);
    }

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.end(`Ilość requestów: ${reqNumber}`)
}).listen(port, '127.0.0.1')
