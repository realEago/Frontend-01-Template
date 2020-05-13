
class Request {
  constructor(options) {
    this.method = options.method || "GET";
    this.host = options.host;
    this.port = options.port || 80;
    this.path = options.port;
    this.body = options.body || {};
    this.headers = options.headers || {};
    if (!this.headers["Content-Type"]) {
      this.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }

    if (this.headers["Content-Type"] === "application/json") {
      this.bodyText = JSON.stringify(this.body);
    } else if(this.headers["Content-Type"] === "application/x-www-form-urlencoded") {
      this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&');
      // mark
    }
    this.headers["Content-Length"] = this.bodyText.length;
  }

  toString(){
    return `${this.method} ${this.path} HTTP/1.1\r
    ${Object.keys(headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r
    ${this.bodyText}
    `
  }

  open(method, url, ){

  }
  send(options) {

  }
}

class Response {

}



const net = require('net');
const client = net.createConnection({ host: "127.0.0.1", port: 8088 }, () => {
  // 'connect' 监听器
  console.log('已连接到服务器');
  let request = new Request({
    method: "POST",
    host: "127.0.0.1",
    port: "8088",
    body: {
      name: "winter"
    }
  })
  client.write('POST / HTTP/1.1\r\n');
  client.write('Content-Type:application/x-www-form-urlencoded\r\n');
  client.write('\r\n');
  client.write('\r\n');
  client.write('field1=aaa&code=x%3D1\r\n');
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('已从服务器断开');
});

// 看到46：36秒