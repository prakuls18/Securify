require("dotenv").config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

const reportModel = require('./models/Report')

mongoose.connect("mongodb+srv://prakuls18:<password>@cluster0.j48yxbw.mongodb.net/test")

app.use(express.json())
app.use(cors())

app.get("/email_info/:email_id", (req, res) => {

})

app.get("/multiple_email_info", (req, res) => {

})

app.get("/detailed_email_info/:email_id", (req, res) => {

})

app.post("/start_report_process", (req, res) => {

})

app.post("/enter_code", (req, res) => {

})
