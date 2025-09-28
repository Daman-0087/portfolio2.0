const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
var path = require('path');
const nodemailer = require('nodemailer');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.post('/', (req, res) => {
  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.SMTP_USER || 'programmingdaman2006@gmail.com',
      pass: process.env.SMTP_PASS || 'rdhd aqcz uxje hsha'
    }
  });
  var mailOptions = {
    from: 'programmingdaman2006@gmail.com',
    to: 'damanpreetsingh1979@gmail.com',  
    subject: `New Feedback received`,
    text: `Answers: ${req.body.name}; ${req.body.email}; ${req.body.feedback}`
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.send('<h1 class="text-center">Thank You for your feedback!</h1>');
    }
  });
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})