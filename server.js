const express = require("express")
const routes = require("./src/routes")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 5555

app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json())

app.use(routes)

app.use((req, res, next) => {
    const erro = new Error('Não encontrado')
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        error: {
            message: error.message
        }
    })
})

app.listen(port, erro => {
    if(erro) return console.log(`Azedou: ${erro}`)
    console.log('Running on port: ', port)
})