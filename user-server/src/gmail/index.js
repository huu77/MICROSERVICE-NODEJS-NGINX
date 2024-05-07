const nodemailer = require('nodemailer');
require("dotenv").config();

 
 
const sendMail = async(toEmail,data)=>{
    // Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_EMAIL
    }
});
    // Email content
 

let mailOptions

if(data){
    mailOptions = {
        from: 'thuu28052002@gmail.com',
        to: toEmail,
        subject: 'NETTRUYEN',
        text: 'http://localhost:3001/api/v1/verified?idAccount='+data
    };
}else{
    mailOptions = {
        from: 'thuu28052002@gmail.com',
        to: toEmail,
        subject: 'NETTRUYEN',
        text: "Wellcome to NETTRUYEN"
    };
}
// Send email
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
}

// sendMail('henryng2805@gmail.com',"hello huu")

module.exports = sendMail