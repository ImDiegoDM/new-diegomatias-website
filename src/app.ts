import * as express from 'express'
import routes from './routes'

const app = express()
const port = 3000

routes(app)

app.use('/public',express.static('public'))

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});