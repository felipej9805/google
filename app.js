const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

  switch (req.url) {
    case "/":
      res.writeHead(200, { 'content-type': 'text/html' })
      fs.createReadStream('index.html').pipe(res)
      break
    case "/enviar":
      res.writeHead(200);
      res.end(JSON.stringify("Enviado"));

      break
    default:
        res.writeHead(404);
        res.end(JSON.stringify({error:"Resource not found"}));
}

})



server.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
})