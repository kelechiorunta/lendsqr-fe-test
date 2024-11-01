// pages/api/auth/resetPassword.js
import connectToDatabase from "@/app/utils/db/db";
import User from "@/app/utils/models/User";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

  const data = await req.json();
  const { token, password } = data;

  if (!token || !password) {
    return NextResponse.json({ message: 'Token and password are required' }, {status:400});
  }
  
  try {
    // Decode the token to find the user
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await connectToDatabase();

    // Find the user by ID
    const user = await User.findById(decoded.userId);
    if (!user) {
      return  NextResponse.json({ message: 'User not found'}, { status: 400 });
    }

    // Update the user's password (make sure to hash it)
    user.password = password; // You should hash this in the model's pre-save hook
    await user.save();

    return  NextResponse.json({ message: 'Password reset successful'}, { status: 200 })
  } catch (error) {
    console.error(error);
    return  NextResponse.json({ message: 'Invalid or Expired Token'}, { status: 400 })
  }
 
//   res.status(200).json({ message: 'Password reset successful' });
}

export { handler as GET, handler as POST }