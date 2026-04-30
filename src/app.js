const express = require ('express')
const app = espress()

app.use(express.json())

const authRoutes = require ('./routes/authRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const transactionRoutes = require('./routes/transactionRoutes')


app.use('./auth', authRoutes)
app.use('./categories', categoryRoutes)
app.use('./transaction', transactionRoutes)

module.exports = app



