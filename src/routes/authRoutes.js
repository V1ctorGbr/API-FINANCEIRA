const express = require('express')


const router = express.Router ()

const authRoutes = require('./controllers/authController')

router.post('./register',authController.register)

module.exports = router