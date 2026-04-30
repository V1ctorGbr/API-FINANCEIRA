const express = require('express')


const router = express.Router ()

const usuarios = []

router.post ('/register',(req, res) =>{
    const {name,email,password} = req.body

    usuarios.push({name, email, password})

    res.json({message:'Usuário cadastrato  '})
})

module.exports = router