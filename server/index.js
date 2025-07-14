require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

// configure your SMTP in .env:
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: +process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

app.post('/api/contact', async (req, res) => {
  console.log('Request body: ' + JSON.stringify(req.body))
  const { name, email, phone, message } = req.body
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  const mailOptions = {
    from: `"Kontakt ze strony" <${process.env.SMTP_USER}>`,
    to: process.env.AGENT_EMAIL,     // your agent’s inbox
    subject: `Nowe zgłoszenie od ${name}`,
    text: `
Imię i nazwisko: ${name}
Email: ${email}
Telefon: ${phone}

Wiadomość:
${message}
    `.trim()
  }

  try {
    await transporter.sendMail(mailOptions)
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to send' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Contact API listening on port ${PORT}`))
