const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end(`Welcome ExtraMortals!!!`)
    };
    if(req.url === '/about'){
        res.end(`We go the Extra Mile`)
    };
    res.end(`
        <h1>Anaye,!!! </h1>
        <p>Wetin You Dey Find No Dey Here</p>
        <a href="/">Pada Si ile</a>
    `);
});

server.listen(5500)