import http from 'http'

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
  const data = [["id", "name"], ["1", "QA"], ["2", "Linh"]]
  const csv = data.reduce((prev, curr) => {
    return prev += `${curr.join(",")}\n`
  }, "")
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment;filename=hello.csv")
  res.writeHead(200);
  res.end(csv)
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});