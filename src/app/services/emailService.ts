import * as nodemailer from "nodemailer";

// send contact info/details to ryans email
// make sure ryan's email is set up and provides me with Gmail details (one time password etc)
// nodemailer
// connect to frontend
// get user input
// console.log for debugging

// reference promoSender project if stuck

// create transporter with SMTP settings
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

// send email to Ryan's gmail
export async function emailService() {
  try {
  } catch (error) {
    console.error("Error sending email");
  }
}
