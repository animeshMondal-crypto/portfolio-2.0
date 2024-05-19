import { NextResponse } from "next/server";
import EmailTemplate from "../../../../emails/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, message } = await req.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "anikrypto2612@proton.me",
      subject: "Portfolio Message",
      react: EmailTemplate({ email, message }),
    });

    return NextResponse.json({
      success: true,
      message: "email sent successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
