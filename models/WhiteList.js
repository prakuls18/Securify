const mongoose = require('mongoose')

const WhiteListSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    }
});

const WhiteList = mongoose.model("WhiteListEmail", WhiteListSchema)
module.exports = WhiteList;