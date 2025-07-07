const http = require("http");

const myServer = http.createServer((req, res) => {
    console.log(`New request received for ${req.url}`);

    res.setHeader("Content-Type", "text/plain");

    if (req.url === "/") {
        res.end("Welcome to the new Node Server!");
    } else if (req.url === "/about") {
        res.end("This is the About Page");
    } else if (req.url === "/contact") {
        res.end("Contact us at self@gmail.com");
    } else {
        res.statusCode = 404;
        res.end("404 Page Not Found");
    }
});

myServer.listen(3000, () => console.log("Server Started on port 3000"));
