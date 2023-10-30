import { EmailTemplate } from './EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const request = await req.json();

  try {
    const data = await resend.emails.send({
      from: request.email,
      to: [process.env.GMAIL_EMAIL_ADDRESS!],
      subject: request.subject,
      text: request.message,
      react: EmailTemplate({ fullName: request.name }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}