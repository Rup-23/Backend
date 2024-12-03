// https://github.com/mde/ejs/wiki/Using-EJS-with-Express


const express = require('express')
const ejs = require('ejs');

const app = express()
const port = 3000

app.set('view engine','ejs');


app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["Hey",24,69,96]
  res.render('index' , {siteName: siteName , searchText: searchText , arr})
})

app.get('/', (req, res) => {
    let blogTitle = "Adidas why and when?"
    let blogContent = "Its a very good brand"
  res.render('blogpost' , {blogTitle: blogTitle , blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})