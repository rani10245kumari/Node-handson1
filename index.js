console.log("hello i am ranj")
const http = require('http')
const jsonData = require('./jsonPackage')

const server = http.createServer((request, response) => {
    if (request.url == '/') {
        response.write("<h1>this is my HHTP Home Service Page...</h1>")
        response.write("<h1>What is node Js?</h1><h2>Node js is a javascript runtime environment built in chrome v8 javascript engine</h2><ol>Advantage of node js-<li>Open source</li><li>Cross Platform</li><li>Real time application used</li></ol>")
        response.end();
    }
    else if (request.url == '/products') {
        response.write("<h1>this is my HHTP Product Service Page...</h1>")
        response.end();
    }
    else if (request.url == '/student') {
        response.write("<h1>this is my HHTP Student Service Page...</h1>")
        const jsonStore = JSON.stringify(jsonData);
        response.write(jsonStore)
        response.end();
    }
    else {
        response.write('<h2>404 Error</h2>')
        response.end();
    }
})
server.listen(5000, () => {
    console.log("server started")
})
