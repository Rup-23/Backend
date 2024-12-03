const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))



app.get('/', (req, res) => {
  res.send('Hello World!.........')
}) 

app.get('/contact', (req, res) => {
  res.send('Hello contact US ')
})

app.get('/about', (req, res) => {
  res.send('About US')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog')
})

app.get('/blog/:slug', (req, res) => {
    console.log(req.params) // Output :  params: { slug: 'ADF' },
    console.log(req.query) // Output :   query: { mode: 'dark', region: 'in' },
  res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 
