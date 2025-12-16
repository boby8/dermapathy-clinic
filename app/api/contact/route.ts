import { NextRequest, NextResponse } from "next/server";
import { contactInfo } from "@/features/contact/constants";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Option 1: Use Resend (recommended - free tier available)
    // Get your API key from https://resend.com/api-keys
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Dermapathy Clinic <onboarding@resend.dev>", // Replace with your verified domain
          to: [contactInfo.email], // Sends to clinic email
          replyTo: email, // User's email for replies
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
            <hr>
            <p><small>This message was sent from the Dermapathy website contact form.</small></p>
          `,
          text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from the Dermapathy website contact form.
          `,
        }),
      });

      if (!resendResponse.ok) {
        const error = await resendResponse.json();
        throw new Error(error.message || "Failed to send email");
      }

      return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
      );
    }

    // Option 2: Fallback - Log to console (for development)
    // In production, you should set up Resend or another email service
    console.log("=== CONTACT FORM SUBMISSION ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Should be sent to:", contactInfo.email);
    console.log("================================");

    // For now, return success (you can set up Resend later)
    return NextResponse.json(
      {
        message:
          "Message received. Email service not configured. Check server logs.",
        note: "Set RESEND_API_KEY environment variable to enable email sending.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
