import https from 'https'

const url = 'https://jsonplaceholder.typicode.com/users?_limit=2'

let request = https.get(url, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Error: Status is ${res.statusCode}`)

    // tells Node.js to ignore the stream’s data -> discard the data more quickly than left it for GB
    res.resume();
    return;
  }

  let data = ''

  //  Node.js streams the data of an HTTP response in chunks
  res.on('data', (chunk) => {
    data += chunk
  })

  // When all the data from the server is received, Node.js emits a close event
  res.on('close', () => {
    console.log('Retrieved all data');
    console.log(JSON.parse(data));
  });
});

// When a request is made but cannot be sent, the request object emits an error event.
request.on('error', (err) => {
  console.error(`Encountered an error trying to make a request: ${err.message}`);
});
