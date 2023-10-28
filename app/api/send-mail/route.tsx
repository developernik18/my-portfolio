import { NextRequest } from "next/server";

const nodemailer = require("nodemailer");

export default async function POST(req: NextRequest) {
  const request = await req.json();

  const message = {
    from: request.email,
    to: request.GMAIL_EMAIL_ADDRESS,
    subject: request.subject,
    text: request.message,
    html: `<p>${request.message}</p>`,
  };

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  

}