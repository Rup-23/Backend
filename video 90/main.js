const express = require('express')
const app = express()
const port = 3000
const fs =  require("fs")
const blog = require('./routes/blog')



app.use('/blog',blog)


app.use((req, res, next) => {
    console.log(req.header)
    req.rupesh = "I m rupesh";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Middelware 1")
    next()
})

app.use((req, res, next) => {
    console.log('M2')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
}) 


app.get('/about', (req, res) => {
    res.send('Hello about!' + req.rupesh)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})