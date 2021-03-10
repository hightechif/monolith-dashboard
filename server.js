require('dotenv').config()
const app = require('./app');
const http = require('http');

const {PORT = 8000} = process.env;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT} (http://localhost:${PORT})`)
})
