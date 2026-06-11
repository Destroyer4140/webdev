// Simple Node.js Server
const http = require('http');

// function requestListener(req, res) {
//   console.log(req);
// }

// http.createServer(requestListener);

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body><h1> Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" id="name" name="name" palceholder="Enter your name"<br><br>');
    res.write('<label for="gender"> Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male"> Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female"> Female</label><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  }else if(req.url === '/product') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1> Checkout our product.</h1></body>');
    res.write('</html>');
    res.end();
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1> Like / Share / Subscribe</h1></body>');
    res.write('</html>');
    res.end();
  }
  
  // process.exit();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});