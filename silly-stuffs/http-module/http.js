import http from 'http'

const host = 'localhost';
const port = 8000;

// use this to get list question
// Create a server
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("My first server!");
};

const server = http.createServer(requestListener)

server.listen(port, host, () => {
  console.log("Server started on port 3000");
})

