const http = require('http');

const host = 'localhost';
const port = '1245';

const requestListener = function myRequestListener(req, res) {
  res.writeHead(200);
  res.end('Hello Holberton School!');
};

const app = http.createServer(requestListener);
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}\n`);
});

module.export = app;
