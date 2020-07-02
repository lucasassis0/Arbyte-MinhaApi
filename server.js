const express = require("express")
const app = express()
const port = process.env.PORT || 5555

app.get('', (req, res)=>{
    res.json({
        message: "♥"
    })
})

app.listen(port, erro => {
    if(erro) return console.log(`Azedou: ${erro}`)
    console.log('Running on port: ', port)
})