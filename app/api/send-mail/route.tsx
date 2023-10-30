import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from './EmailTemplate';

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
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
      html: EmailTemplate({ fullName: request.message }),
    });

    return NextResponse.json(info);
  
}