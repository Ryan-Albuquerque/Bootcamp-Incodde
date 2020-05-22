const express = require("express")
const path = require("path")

const route = express.Router()

route.get("/desafio", (req,res)=>{
    res.sendFile(path.join(__dirname + "/desafioJSDOM/index.html"))
})


route.get("/fakeGoogle", (req,res)=>{
    res.sendFile(path.join(__dirname, "/desafio_fake_google/index.html"))
})

module.exports = route