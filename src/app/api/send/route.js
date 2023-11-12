import useContactForm from '../../../hooks/useContactForm';
import { NextResponse } from 'next/server';
import  { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function POST(request) {
  try {
    const body = request.json();
    console.log("body", body);
    const { fullname, email, subject, message } = body;
    const data = await resend.emails.send({
      from: "contact@fullsendwaxing.com",
      to: "alec@fullsendwaxing.com",
      subject: "New Contact",
      react: useContactForm({
        name: fullname,
        email: email,
        subject: subject,
        message: message,
      }),
    });

    if(data.success === 'success') {
      return NextResponse.json({message: 'Email send successfully'})
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

module.exports = { POST };