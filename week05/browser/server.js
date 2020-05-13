const http = require("http");

const port = 8088;
const server = http.createServer((req, res) => {
  console.log('request received', req);
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo','bar');
  res.writeHead(200,{'Content_type': 'text/plain'});
  res.end('ok');
})

//监听端口
server.listen(port,() => {
  console.log(`正在监听 ${port} 端口...`);
})