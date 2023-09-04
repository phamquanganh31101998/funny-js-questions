import http from 'http'
import fs from 'fs/promises'

// holding the content
let indexFile;

const requestListener = async function (req, res) {
  try {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
  } catch (e) {
    res.writeHead(500);
    res.end(e.toString());
  }
};

const server = http.createServer(requestListener);

async function main () {
  const host = 'localhost';
  const port = 8000;
  try {
    indexFile = await fs.readFile('./index.html')
    server.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
    });
  } catch (e) {
    console.error(`Could not read index.html file: ${e}`);
    process.exit(1);
  }
}

main()