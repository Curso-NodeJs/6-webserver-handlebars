const http = require('http');

http.createServer((req, resp) => {
    // res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    // resp.writeHead(200, { 'Content-Type': 'text/plain' });
    
    
    resp.write('Hola mundo');
    resp.end();
}).listen(8000);

console.log('escuchando en el puerto 8000');