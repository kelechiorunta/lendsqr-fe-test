// pages/api/auth/forgotPassword/route.js
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import connectToDatabase from '@/app/utils/db/db';
import User from '@/app/utils/models/User';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }
  const data = await req.json();
  const { email } = data;
  
  await connectToDatabase();

  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {

    return res.status(404).json({ message: 'User not found' });
  }

  // Generate a reset token and expiry date
  const resetToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1h', // Token valid for 1 hour
  });
  const resetTokenExpiry = Date.now() + 60 * 60 * 1000; // Token valid for 1 hour

  // Update user with reset token and expiry
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = resetTokenExpiry;
  await user.save();

  // Send reset email with token
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail or any other email service
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password/${resetToken}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset',
    html: `<p>You requested a password reset. Click the link below to reset your password:</p>
           <a href="${resetLink}">Reset Password</a>
           <p>If you did not request this, please ignore this email.</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Password reset email sent' }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 })
  }
}



export { handler as GET, handler as POST }