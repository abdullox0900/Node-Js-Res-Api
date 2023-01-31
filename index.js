const http = require('http');

const books = [
    {
        id: 1,
        title: 'Book N1',
        desc: 'Desip',
        author: 'Booking Alixinder',
    }
]

const server = http.createServer((req, res) => {
    if(req.url === '/books' && req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type' : 'application/json charset=utf8'
        })
        const resp = {
            status: 'OK',
            books
        }
        res.end(JSON.stringify(resp))
    } else if (req.url === '/books' && req.method === 'POST') {
        console.log(req.body );
    }
})

server.listen(4000, () => console.log('Server runnig on port 4000'))