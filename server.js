const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
let httpsOptions = {}
if (!dev) {
  httpsOptions = {
    key: fs.readFileSync(process.env.CERT_PRIVATEKEY),
    cert: fs.readFileSync(process.env.CERT_CERTIFICATE),
    ca: fs.readFileSync(process.env.CERT_CA)
  };
}

const port = dev ? 8080 : 80

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
    
  }).listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on https://localhost:${port}`);
  });
});