const db = require("./database/db")

const express = require("express")

const route = express.Router()

route.get("/", (req, res)=>{
    res.json(db)
})

route.post('/test', (req, res) => {
    db.push(req.body)

    res.send("salvo")
});

route.get("/user/:username", (req,res)=>{
    db.forEach(element => {
        if(element.username == req.params.username){
            res.json(element)
        }else{
            return
        }
    });
})

module.exports = route


