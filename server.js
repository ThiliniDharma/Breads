//dependencies
const express = require('express')

//configuration
require('dotenv').config()

const PORT = process.env.PORT
//console.log(PORT)
const app = express()

//routes
app.get('/',(req,res) =>
{
res.send('Welcome to an Awsome App about Breads!')
});

//breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//listen
app.listen(PORT, ()=> {
    console.log('Listening on port: ',PORT);
});

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  