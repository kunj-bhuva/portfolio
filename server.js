// Load environment variables
require('dotenv').config();

// Core packages
const express = require("express");
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");

// Initialize express app and router
const app = express();
const router = express.Router();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/", router);

// Email credentials from .env
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

console.log("Email User:", EMAIL_USER ? "Loaded ✅" : "Missing ❌");
console.log("Email Pass:", EMAIL_PASS ? "Loaded ✅" : "Missing ❌");

// Configure Nodemailer
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  },
});

// Verify transporter
contactEmail.verify((error) => {
  if (error) {
    console.log("Email verification error:", error);
  } else {
    console.log("✅ Email server ready to send");
  }
});

// Contact route
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;

  const mail = {
    from: `${name} <${email}>`,
    to: "kunjbhuva894@gmail.com", // Your destination email
    subject: "Contact Form Submission - Portfolio",
    html: `
      <h3>New message from your portfolio</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error("SendMail error:", error);
      res.status(500).json({ code: 500, message: "Failed to send message" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ code: 200, message: "Message sent successfully" });
    }
  });
});

// Serve static files from React frontend
app.use(express.static(path.join(__dirname, "build")));

// Handle all other routes with React frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌐 Server running on port ${PORT}`);
});
