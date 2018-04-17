const http = require('http');
const url = require('url');
const sHost = 'localhost';
const nPort = 8000;

function start(port, hostname, route) {
    function onRequest(req, res){
        let Spathname = url.parse(req.url).pathname;
        console.log('url : ' +req.url)
        route(Spathname);
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write('Hello, world');
        res.end();
    }
    http.createServer(onRequest).listen(port, hostname);
    console.log('Server is renning at http://' + hostname + ':' + port);
}

exports.start = start;