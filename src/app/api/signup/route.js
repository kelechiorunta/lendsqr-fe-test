// /pages/api/signup.js

import connectToDatabase from '@/app/utils/db/db';
import User from '@/app/utils/models/User'; // Import your User model
import bcrypt from 'bcrypt'
import { getServerSession } from 'next-auth/next'; //No need for a session as it will be used in login
import { authOptions } from '../auth/[...nextauth]/route';// No need for authOptions configuration since the session will be handled at login
import { NextResponse } from 'next/server';

async function handler(req, res) {

  const data = await req.json();
  const { username, email, password } = data;

  // Validate input
  if (!username || !email || !password) {
    return NextResponse.json({ message: 'Userame, email and password are required' }, { status: 400 })
  }

  try {
    await connectToDatabase();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 })
    }

    // Create the new user
    //The user model will hash the password with the pre-save hook
    const newUser = new User({username, email, password})
    await newUser.save();

    return NextResponse.json({ message: 'User registered successfully. Please log in.' }, { status: 201 });
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 })
    
  }
}

export { handler as GET, handler as POST }