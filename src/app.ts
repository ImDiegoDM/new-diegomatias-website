import * as express from 'express'
import routes from './routes'
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser'
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https'

dotenv.config()

console.log(process.env.SMTP_HOST)

const app = express()
const port = process.env.PORT || 3000;

const mode = process.env.NODE_ENV || 'development';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

routes(app)
app.use('/public',express.static('public'))

if(mode === 'production'){
  const redirectApp = express()

  redirectApp.get('*',(req, res)=>{
    res.redirect('https://' + req.headers.host + req.url);
  })

  // Certificate
  const privateKey = fs.readFileSync(process.env.CERT_PRIVATEKEY, 'utf8');
  const certificate = fs.readFileSync(process.env.CERT_CERTIFICATE, 'utf8');
  const ca = fs.readFileSync(process.env.CERT_CA, 'utf8');

  const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
  };

  // Starting both http & https servers
  const httpServer = http.createServer(redirectApp);
  const httpsServer = https.createServer(credentials, app);
  
  httpServer.listen(80, () => {
    console.log('Redirect running on port 80');
  });
  
  httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
  });
}else{
  app.listen(port, function () {
    console.log(`App in development mode runing on ${port}!`);
  });
}
