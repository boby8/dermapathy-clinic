import { NextRequest, NextResponse } from "next/server";
import { contactInfo } from "@/features/contact/constants";

// Simple HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, preferredTime } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required" },
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
          subject: `New Contact Form: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            ${preferredTime ? `<p><strong>Preferred Time:</strong> ${escapeHtml(preferredTime)}</p>` : ""}
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
            <hr>
            <p><small>This message was sent from the Dermapathy website contact form.</small></p>
          `,
          text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}
Subject: ${subject}
${preferredTime ? `Preferred Time: ${preferredTime}` : ""}

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

    // Option 2: Fallback - Log to console (for development only)
    if (process.env.NODE_ENV === "development") {
      console.log("=== CONTACT FORM SUBMISSION ===");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone || "Not provided");
      console.log("Subject:", subject);
      console.log("Preferred Time:", preferredTime || "Not specified");
      console.log("Message:", message);
      console.log("Should be sent to:", contactInfo.email);
      console.log("================================");
    }

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
