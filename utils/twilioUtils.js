const accountSid = process.env.ACCOUNT_SID; 
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken); 


const sendCode = async (phoneNumber, code) => {
    return await client.messages 
          .create({         
             from: process.env.TWILIO_PHONE,
             to: phoneNumber,
             body: `Your Securify verification code is: ${code}`,
           }); 
}

module.exports.sendCode = sendCode
