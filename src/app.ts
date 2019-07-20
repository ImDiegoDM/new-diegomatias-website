import * as express from 'express'
import routes from './routes'
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser'

dotenv.config()

console.log(process.env.SMTP_HOST)

const app = express()
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

routes(app)
app.use('/public',express.static('public'))

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});