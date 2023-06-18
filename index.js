const express = require('express');
const routerApi = require('./routes/index.router')
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('El pepe sabroson')
})

routerApi(app)

app.listen(port, () => {
  console.log('App running at port: ' + port);
})