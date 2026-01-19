import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

// Create and configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY, 
  },
});

// HTML email template
const generateEmailTemplate = (name: string, email: string, userMessage: string): string => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; padding: 30px; border-radius: 10px; background-color: #ffffff;">
    <div style="border-bottom: 3px solid #3B82F6; padding-bottom: 20px; margin-bottom: 20px;">
      <h2 style="color: #1f2937; margin: 0; font-size: 24px;">Portfolio Contact</h2>
      <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px;">New message received from your portfolio</p>
    </div>
    
    <div style="margin-bottom: 25px;">
      <h3 style="color: #3B82F6; font-size: 18px; margin-bottom: 15px;">Contact Details</h3>
      <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #3B82F6;">
        <p style="margin: 8px 0;"><strong style="color: #374151;">Name:</strong> <span style="color: #1f2937;">${name}</span></p>
        <p style="margin: 8px 0;"><strong style="color: #374151;">Email:</strong> <span style="color: #3B82F6;">${email}</span></p>
      </div>
    </div>
    
    <div style="margin-bottom: 25px;">
      <h3 style="color: #3B82F6; font-size: 18px; margin-bottom: 15px;">Message</h3>
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; border: 1px solid #e5e7eb;">
        <p style="color: #1f2937; line-height: 1.6; margin: 0; white-space: pre-wrap;">${userMessage}</p>
      </div>
    </div>
    
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
      <a href="mailto:${email}" 
         style="display: inline-block; padding: 12px 24px; background-color: #3B82F6; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600;">
        Reply to ${name}
      </a>
    </div>
    
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
      <p style="font-size: 12px; color: #9ca3af; margin: 0;">
        This email was sent from your portfolio contact form.<br>
        &copy; ${new Date().getFullYear()} Portfolio. All rights reserved.
      </p>
    </div>
  </div>
`;

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    // Validate required fields
    if (!name || !email || !userMessage) {
      return NextResponse.json({
        success: false,
        message: 'Name, email, and message are required.',
      }, { status: 400 });
    }

    // Validate environment variables
    if (!process.env.EMAIL_ADDRESS || !process.env.GMAIL_PASSKEY) {
      console.error('Email configuration is missing');
      return NextResponse.json({
        success: false,
        message: 'Email service is not configured.',
      }, { status: 500 });
    }

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_ADDRESS}>`, 
      to: process.env.EMAIL_ADDRESS, 
      subject: `New Portfolio Message from ${name}`, 
      html: generateEmailTemplate(name, email, userMessage), 
      replyTo: email, 
    };
    
    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    }, { status: 500 });
  }
}