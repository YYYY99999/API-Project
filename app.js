const http = require ('http');

const server = http.createServer((req, res)=>{
    if(req.url ==='/')
    {
        res.write('Lets Resise Some Images!');
        res.end();
    }

    if(req.url ==='/api/resizeImage')
    {
        res.write (JSON.stringify([1, 2, 3]));
        res.end();
    }

});

server.listen(8000);
console.log('Listening on Port 8000....');