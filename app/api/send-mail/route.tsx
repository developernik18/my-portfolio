import { NextRequest, NextResponse } from 'next/server';

const nodemailer = require("nodemailer");

const myEmail = process.env.GMAIL_EMAIL_ADDRESS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: myEmail,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});



export async function POST(req: NextRequest) {
  const request = await req.json();

  const info = await transporter.sendMail({
    from: request.email,
    to: myEmail,
    subject: request.subject,
    text: request.message,
    html: `
    <div> From: ${request.name} </div>
    <div> Contact email: ${request.email} </div>
    <div> Subject: ${request.subject} </div>
    <br><hr>
    <div> Message </div>
    <hr>
    <p> 
      ${request.message} 
    </p>`,
  });

  return NextResponse.json(info);
  
}