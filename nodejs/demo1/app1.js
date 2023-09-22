let http = require('http');
let port = 8080;
let hostname = "localhost";

let server = http.createServer(function(req,res){
    res.write("Hello, this is muy new NodeJS server");
    res.end;

    console.log('New request...');
    console.log('URL: ',req.url);
    console.log('Request method: ',req.method);

    //console.log(req);
});

server.listen(port,hostname,function(){
    console.log('Server listening to the port : '+port);
})
