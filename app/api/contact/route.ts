import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { connectDB } from '@/lib/mongodb';
import Contact from '@/models/Contact';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const resend   = new Resend(process.env.RESEND_API_KEY);
console.log(resend);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message, source, website } = body ?? {};

    if (website) return NextResponse.json({ ok: true }, { status: 200 });

    if (!name || typeof name !== 'string' || name.trim().length < 2)
      return NextResponse.json({ ok: false, error: 'Name is required.' }, { status: 400 });
    if (!email || !EMAIL_RE.test(email))
      return NextResponse.json({ ok: false, error: 'A valid email is required.' }, { status: 400 });
    if (!message || typeof message !== 'string' || message.trim().length < 10)
      return NextResponse.json({ ok: false, error: 'Please share at least a short message (10+ characters).' }, { status: 400 });

    // ── MongoDB ──────────────────────────────────────────
    console.log('Connecting to MongoDB...');
    await connectDB();
    console.log('MongoDB connected. Creating document...');

    const doc = await Contact.create({
      name:    name.trim(),
      email:   email.trim().toLowerCase(),
      phone:   phone?.trim(),
      company: company?.trim(),
      service: service?.trim(),
      budget:  budget?.trim(),
      message: message.trim(),
      source:  source?.trim() || 'website',
    });
    console.log('Document created:', doc._id);

    // ── Resend ───────────────────────────────────────────
    console.log('Sending email via Resend...');
    const { error: mailError } = await resend.emails.send({
      from:    'Hosting Nation <onboarding@resend.dev>',   // ← temp until domain verified
      to:      [process.env.CONTACT_EMAIL!],
      replyTo: email.trim(),
      subject: `New enquiry from ${name.trim()} Hosting Nation`,
      html: `
        <div style="font-family:sans-serif;max-width:620px;margin:auto;color:#333">
          <div style="background:#dc3545;padding:24px 32px;border-radius:12px 12px 0 0">
            <h1 style="color:#fff;margin:0;font-size:20px">New Contact Form Submission</h1>
            <p style="color:rgba(255,255,255,0.8);margin:4px 0 0;font-size:13px">ID: ${doc._id}</p>
          </div>
          <div style="border:1px solid #ebebeb;border-top:none;padding:32px;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#606060;width:100px">Name</td>  <td style="padding:8px 0;font-weight:600">${name.trim()}</td></tr>
              <tr><td style="padding:8px 0;color:#606060">Email</td> <td style="padding:8px 0"><a href="mailto:${email.trim()}" style="color:#dc3545">${email.trim()}</a></td></tr>
              ${phone   ? `<tr><td style="padding:8px 0;color:#606060">Phone</td>   <td style="padding:8px 0">${phone.trim()}</td></tr>`   : ''}
              ${company ? `<tr><td style="padding:8px 0;color:#606060">Company</td> <td style="padding:8px 0">${company.trim()}</td></tr>` : ''}
              ${service ? `<tr><td style="padding:8px 0;color:#606060">Service</td> <td style="padding:8px 0">${service.trim()}</td></tr>` : ''}
              ${budget  ? `<tr><td style="padding:8px 0;color:#606060">Budget</td>  <td style="padding:8px 0">${budget.trim()}</td></tr>`  : ''}
            </table>
            <hr style="border:none;border-top:1px solid #ebebeb;margin:20px 0" />
            <p style="color:#606060;font-size:13px;margin:0 0 8px">Message</p>
            <p style="font-size:14px;line-height:1.7;margin:0">${message.trim().replace(/\n/g, '<br/>')}</p>
          </div>
        </div>
      `,
    });

    if (mailError) {
      console.error('Resend error:', mailError);  // logged but won't fail the request
    } else {
      console.log('Email sent successfully');
    }

    return NextResponse.json(
      {
        ok:      true,
        id:      doc._id?.toString(),
        message: 'Thanks! Your message has been received. Mohd Suhail will reply within 1 business day.',
      },
      { status: 201 }
    );

  } catch (err) {
    console.error('Contact POST error:', err);   // ← this will show the real cause in terminal
    return NextResponse.json(
      { ok: false, error: 'Something went wrong. Please email us directly.' },
      { status: 500 }
    );
  }
}