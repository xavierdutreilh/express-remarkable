const express = require('express')

const remarkable = require('../../lib')

const app = express()

app.engine('md', remarkable(app))

app.set('view engine', 'md')
app.set('views', `${__dirname}/views`)

app.get('/', (request, response) => {
  response.render('index')
})

app.get('/debug', (request, response) => {
  response.render('debug')
})

module.exports = app
