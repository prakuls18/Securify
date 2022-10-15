const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

const reportModel = require('./models/Report')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://prakuls18:<password>@cluster0.j48yxbw.mongodb.net/test", 
{
    useNewURLParser: true,
});

