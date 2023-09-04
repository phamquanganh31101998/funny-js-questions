import http from 'http'

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
  const data = {code: 200, message: "Hello"}
  res.setHeader("Content-Type", "application/json")
  res.writeHead(200)
  res.end(JSON.stringify(data))
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});