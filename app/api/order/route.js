import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, service, date, guests, budget, details } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const subject = `New order request \u2014 ${service}`;
    const text =
      `Full name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone number: ${phone}\n` +
      `Service needed: ${service}\n` +
      `Event date: ${date || 'Not specified'}\n` +
      `Number of guests: ${guests || 'Not specified'}\n` +
      `Budget range: ${budget}\n\n` +
      `Details:\n${details || '(none provided)'}`;

    await transporter.sendMail({
      from: `"Andi's Cakes & Creations website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject,
      text,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Order email failed:', err);
    return Response.json({ ok: false }, { status: 500 });
  }
}