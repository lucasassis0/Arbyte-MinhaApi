const express = require("express")
const routes = require("./src/routes")
const app = express()
const port = process.env.PORT || 5555

app.use(routes)

app.listen(port, erro => {
    if(erro) return console.log(`Azedou: ${erro}`)
    console.log('Running on port: ', port)
})