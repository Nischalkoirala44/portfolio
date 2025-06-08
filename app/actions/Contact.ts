"use server"

import { Resend } from "resend"
import { z } from "zod"


const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})


export async function sendContactEmail(prevState: any, formData: FormData) {
  try {
    const validatedFields = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    if (!validatedFields.success) {
      return {
        message: validatedFields.error.errors[0].message,
        type: "error" as const,
      };
    }

    const { name, email, subject, message } = validatedFields.data;

    try {
      const data = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["koiralanischal01@gmail.com"],
        subject: `Contact Form: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1f2937;">New Contact Form Submission</h2>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #374151;">${message.replace(/\n/g, "<br>")}</p>
            </div>
            <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; font-size: 12px; color: #6b7280;">
              <p>This email was sent from your website's contact form.</p>
            </div>
          </div>
        `,
        headers: {
          "Reply-To": email,
        },
      });
      console.log("Email sent successfully:", data);
    } catch (sendError) {
      console.error("Failed to send email:", sendError);
      return {
        message: "Failed to send message. Please try again later.",
        type: "error" as const,
      };
    }

    return {
      message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      type: "success" as const,
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      type: "error" as const,
    };
  }
}
