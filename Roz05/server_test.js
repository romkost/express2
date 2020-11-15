const http = require('http');

http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.write(`
    <div>
    <h1>Dzień dobry</h1>
    <script src="./code.js"></scriprt>
    `)
    res.end('fdd</div>')
}).listen(3000, '127.0.0.1')