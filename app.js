const express = require('express');
const router = require('./routes/noteRoutes');
const mongoose = require('mongoose')
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(router)


//connect to the DataBase
const mongoURI = process.env.mongoURI

mongoose.connect(mongoURI)
    .then(() => {
        console.log("Connected successfully to the DB...")
        app.listen(3000)
    })
    .catch((err) => {
        console.log("Database connection failed...")
    })

app.use((req, res) => {
    res.render('404', { title: "Error" })
})