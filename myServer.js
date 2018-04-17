const http = require('http');
const sHost = 'localhost';
const nPort = 8000;

function start(port, hostname) {
    function onRequest(req, res){
res.writeHead(200, {'Content-type': 'text/html'});
res.write('Hello, world');
res.end();
}
    http.createServer(onRequeast).listen(nPort, sHost);
    console.log('Server is renning at' + sHost + ':' +nPort);
}
exports.start = start;