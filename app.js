const express = require('express')
const app = express()
const port = 3000

// var Promise = require('bluebird');

app.use('/static', express.static('static'));
app.use('/js', express.static('js'));

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
