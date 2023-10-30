import { NextRequest, NextResponse } from "next/server";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.GMAIL_EMAIL_ADDRESS,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  const request = await req.json();

  const info = await transporter.sendMail({
    from: request.email,
    to: request.GMAIL_EMAIL_ADDRESS,
    subject: request.subject,
    text: request.message,
    html: `<p>${request.message}</p>`,
  });

  console.log(info);
  
  return NextResponse.json(info)
}