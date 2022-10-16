const mongoose = require('mongoose')

const PhoneNumberSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: false,
    },
    verified: {
        type: Boolean,
        required: true,
    }

});

const PhoneNumber = mongoose.model("PhoneNumber", PhoneNumberSchema)
module.exports = PhoneNumber;
