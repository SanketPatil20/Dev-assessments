const http = require('http');
const url = require('url');

// Creating HTTP server
const server = http.createServer((req, res) => {
    // Parsing the request URL and query parameters
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (query.name && query.course) {
        
        res.end(`Hello ${query.name}! You have enrolled in ${query.course} course.`);
    } else {
        
        res.end('Please provide both name and course in query parameters.');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});