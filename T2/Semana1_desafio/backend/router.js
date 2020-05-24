const db = require("./database/db")

const express = require("express")

const route = express.Router()

route.get("/", (req, res)=>{
    return res.status(200).json(db)
})

route.post('/test', (req, res) => {
    let i = 0
    if(db.length == 0){
        db.push(req.body) 
        return res.status(201).send("enviado")
    }
    db.forEach(element => {
        if(element.username === req.body.username){ 
            i = 1
            return res.status(409).send("impossivel criar") 
        }  
    });

    if (i!=1) {
        db.push(req.body)
        return res.status(201).send("criado")        
    }
});

route.get("/user/:username", (req,res)=>{
    let i =0
    db.forEach(element => {
        if(element.username === req.params.username){
            i = 1
            return res.status(200).json(element)
        }
    });

    if(i!=1){
        return res.status(404).send("nao encontrado")
    }
})

route.delete("/user/delete/:username", (req,res)=>{
    
    let i = 0
    db.forEach(element => {
        if(element.username === req.params.username){
            pos = db.indexOf(element)

            db.splice(pos, 1)

            i = 1
            return res.status(200).send("elemento eliminado")
        }
    });

    if(i!=1){
        return res.status(404).send("user nao encontraod")
    }


})

module.exports = route


