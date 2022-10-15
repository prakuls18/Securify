const accountSid = process.env.ACCOUNT_SID; 
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken); 


const sendCode = (phoneNumber, code) => {
    client.messages 
          .create({         
             from: process.env.TWILIO_PHONE,
             to: phoneNumber,
             body: `Your Securify verification code is: ${code}`,
           }) 
          .then(message => console.log(message.sid)) 
          .done();
}

module.exports.sendCode = sendCode
