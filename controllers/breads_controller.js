//initialize express
const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//index
breads.get('/', (req, res) =>
{
    res.render('index',
    {
        breads: Bread,
        title: 'Index Page'
    }
  )
//res.send('this is the index at /Breads')
});

//show
//locathost/breads/0...arrayIndex replace to 0 to get output
breads.get('/:arrayIndex', (req, res) =>
{
res.send(Bread[req.params.arrayIndex])
});

module.exports = breads
// SHOW
breads.get('/:arrayIndex', (req, res) => {
  
  // res.render('Show', {
  //   bread: Bread[req.params.arrayIndex]
  // })
  res.render('Show', {
    bread: Bread[req.params.arrayIndex]
  })
})
