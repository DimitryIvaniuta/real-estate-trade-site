// server/index.js
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

// 1) Load .env from the server folder explicitly
require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
});

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE,
  SMTP_USER,
  SMTP_PASS,
  AGENT_EMAIL,
  PORT = 3001,
} = process.env;

// 2) Validate required env vars
const missing = [];
if (!SMTP_HOST)    missing.push('SMTP_HOST');
if (!SMTP_PORT)    missing.push('SMTP_PORT');
if (SMTP_SECURE == null) missing.push('SMTP_SECURE');
if (!SMTP_USER)    missing.push('SMTP_USER');
if (!SMTP_PASS)    missing.push('SMTP_PASS');
if (!AGENT_EMAIL)  missing.push('AGENT_EMAIL');

if (missing.length) {
  console.error(
    `[Startup Error] Missing environment variables: ${missing.join(', ')}`
  );
  process.exit(1);
}

// 3) Log loaded (masked) values for confirmation
console.log('[Env] Loaded SMTP configuration:');
console.log(`  SMTP_HOST=${SMTP_HOST}`);
console.log(`  SMTP_PORT=${SMTP_PORT}`);
console.log(`  SMTP_SECURE=${SMTP_SECURE}`);
console.log(`  SMTP_USER=${SMTP_USER.replace(/.(?=.{3})/g, '*')}`);
console.log(`  AGENT_EMAIL=${AGENT_EMAIL.replace(/.(?=.{3}@)/g, '*')}`);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 4) Configure transporter
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: SMTP_SECURE === 'true',
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

// 5) Verify SMTP on startup
transporter.verify((err, success) => {
  if (err) {
    console.error('[SMTP Verify Error]', err);
    process.exit(1);
  }
  console.log('[SMTP] Connected successfully');
});

// 6) Contact endpoint
app.post('/api/contact', async (req, res) => {
  console.log('[ContactRequest]', new Date().toISOString(), req.ip, req.body);

  const { name, email, phone, message } = req.body;
  const missingFields = [];
  if (!name)    missingFields.push('name');
  if (!email)   missingFields.push('email');
  if (!phone)   missingFields.push('phone');
  if (!message) missingFields.push('message');

  if (missingFields.length) {
    console.warn('[Validation Error] Missing:', missingFields);
    return res
      .status(400)
      .json({ success: false, error: `Missing fields: ${missingFields.join(', ')}` });
  }

  const mailOptions = {
    from: `"Kontakt ze strony" <${SMTP_USER}>`,
    to: AGENT_EMAIL,
    subject: `Nowe zgłoszenie od ${name}`,
    text: `
Imię i nazwisko: ${name}
Email: ${email}
Telefon: ${phone}

Wiadomość:
${message}
    `.trim(),
  };

  console.log('[SMTP Start Send]', mailOptions);

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('[Email Sent]', { messageId: info.messageId });
    return res.json({ success: true });
  } catch (err) {
    console.error('[Email Sending Error]', err);
    return res
      .status(500)
      .json({ success: false, error: 'Failed to send email', details: err.message });
  }
});

// 7) Global error handler
app.use((err, req, res, next) => {
  console.error('[Unhandled Error]', err);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
});

// 8) Start server
app.listen(PORT, () => {
  console.log(`[Server] Listening on port ${PORT}`);
});
