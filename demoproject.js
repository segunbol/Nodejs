const http = require('http');
const {readFileSync} = require('fs');

const homepage = readFileSync('docs/index.html');
const homeStyle = readFileSync('docs/css/main.css');
const homeLogic = readFileSync('docs/js/main.js');
const homeImage = readFileSync('docs/background.jpg');


const server = http.createServer((req, res) => {
    const url = req.url
    console.log(url)
    if(url ==='/'){
    res.writeHead(200,{"content-type":"text/html"})
    res.write(homepage) 
    res.end()
}   
    else if(url === '/about'){
        res.writeHead(200,{"content-type":"text/html"})
        res.write('<h1>About</h1>')
        res.end()
}
    else if(url === '/docs/css/main.css'){
        res.writeHead(200,{"content-type":"text/css"})
        res.write(homeStyle)
        res.end()
}
    else if(url === '/docs/js/main.js'){
        res.writeHead(200,{"content-type":"text/js"})
        res.write(homeLogic)
        res.end()
}
    else if(url === '/docs/background.jpg'){
        res.writeHead(200,{"content-type":"image/jpg"})
        res.write(homeImage)
        res.end()
}
    else {
        res.writeHead(404,{"content-type":"text/html"})
        res.write('<h1>E No Dey</h1>')
        res.end() 
    }
})
server.listen(5500)