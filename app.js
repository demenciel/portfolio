require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3000;

const pass = process.env.PASS_NODE_MAILER;


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'public/index.html');
});

// post for email
app.post("/post", async (req, res) => {
  const {name, email, subject, message} = req.body;
  let transporter = nodeMailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false,
    auth: {
      user: 'alexcouture5@hotmail.com',
      pass: pass,
    }
  });
  let mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'alexcouture5@hotmail.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).sendFile(__dirname + '/public/email.html/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  };

});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
