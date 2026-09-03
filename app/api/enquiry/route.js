import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    console.log('DEBUG user:', process.env.GMAIL_USER);
    console.log('DEBUG pass length:', process.env.GMAIL_APP_PASSWORD ? process.env.GMAIL_APP_PASSWORD.length : 'undefined');

    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailSubject = subject || `New enquiry from ${name}`;
    const text =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`;

    await transporter.sendMail({
      from: `"Andi's Cakes & Creations website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: mailSubject,
      text,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Enquiry email failed:', err);
    return Response.json({ ok: false }, { status: 500 });
  }
}