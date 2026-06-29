import nodemailer from "nodemailer";
import { NextRequest ,NextResponse} from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // 1️⃣ Configure the SMTP Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,  // Your Gmail
        pass: process.env.GMAIL_PASSWORD, // Your App Password
      },
    });

    // 2️⃣ Define Email Content
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER, // Send to your email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // 3️⃣ Send the Email
    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
  } catch (error: unknown) {
    // 🔹 Fixing "error is of type 'unknown'" by asserting it as Error
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: false, error: "Unknown error occurred" }, { status: 500 });
  }
}
