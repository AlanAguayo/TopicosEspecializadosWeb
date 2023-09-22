var http = require('http');

http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var url = req.url;
    if(url ==='/about'){
        res.write('<h1>about us page<h1>');
        res.end();
    }else if (url ==='/contact'){
        res.write('<h1>contact us page<h1>');
        res.end();
    }else{
        res.write('<h1>Hello World!<h1>');
        res.end();
    }
}).listen(3000, function (){
    console.log("server start at port 3000");
});