// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import connectToDatabase from "@/app/utils/db/db"; // MongoDB connection
// import User from "@/app/utils/models/User";
// import bcrypt from 'bcrypt';

// export async function auth(req, res) {
//     // Connect to the MongoDB database

//     /** TRY MY NEW MONGODB_URI WITH NO COLLECTIONS YET INSIDE CREATED ON 8TH OCT., 2024
//  * MONGODB_URI="mongodb+srv://kelechiorunta:keleman4xst@cluster0.3qksfbr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//  */
//     await connectToDatabase();

//     return await NextAuth(req, res, {
//         providers: [
//             CredentialsProvider({
//                 name: "Credentials",
//                 credentials: {
//                     email: { label: "Email", type: "email", placeholder: "Email" },
//                     password: { label: "Password", type: "password" },
//                 },
//                 async authorize(credentials, req) {
//                     // Fetch the user from the database
//                     const user = await User.findOne({ email: credentials.email });

//                     if (!user) {
//                         throw new Error("No user found with the entered email");
//                     }

//                     // Check if the password is valid
//                     const isValidPassword = await user.comparePassword(credentials.password);

//                     if (!isValidPassword) {
//                         throw new Error("Incorrect password");
//                     }

//                     // If credentials are valid, return the user object
//                     return { id: user._id, name: user.name, email: user.email };
//                 }
//             }),

//             GoogleProvider({
//                 clientId: process.env.GOOGLE_CLIENT_ID,
//                 clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//                 authorization: {
//                     params: {
//                       scope: 'openid profile email',
//                       redirect_uri: process.env.NEXTAUTH_REDIRECT
//                     },
//                   },
//             }),
            
//         ],
//         secret: process.env.NEXTAUTH_SECRET,
//         jwt: {
//             maxAge: 60 * 60 * 24 * 30, // Set JWT token expiry to 30 days
//         },
//         session: {
//             jwt:true
//         },
//         pages: {
//             signIn: '/login', // Custom sign-in page
//             signOut:'/',
//             error: '/auth/error', // Error page for authentication issues
//             signUp: '/signup', // Redirect new users here after first sign-in
//             resetPassword: '/reset-password', // Custom reset password page
//             forgotPassword: '/forgot-password'
//         },
//         events:{
//             async signIn(message){
//                 console.log(message, "Success")
//             },
//             async session(message){
//                 console.log(message, "Session in Progress")
//             }
//         },
//         callbacks: {
//             async session({ session, token }) {
//                 // Set the session data from the JWT token
//                 session.user.id = token.sub; // Set user id
//                 session.user.name = token.name; // Set user name
//                 session.user.email = token.email; // Set user email
//                 session.user.picture = token.picture; // Set user email
//                 return session;
//             },
//             async jwt({ token, user }) {
//                 // Persist the user id to the JWT token
//                 if (user) {
//                     token.sub = user.id;
//                 }
//                 return token;
//             }
//         }
//     });
// }

// // Exporting the GET and POST handlers
// export { auth as GET, auth as POST };

// pages/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import connectToDatabase from "@/app/utils/db/db";
import User from "@/app/utils/models/User";
import bcrypt from "bcrypt";

// Define auth options separately to reuse them
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                await connectToDatabase();

                const user = await User.findOne({ email: credentials.email });
                if (!user) throw new Error("No user found with the entered email");

                const isValidPassword = await user.comparePassword(credentials.password);
                if (!isValidPassword) throw new Error("Incorrect password");

                return { id: user._id, name: user.name, email: user.email };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: "openid profile email",
                    redirect_uri: process.env.NEXTAUTH_REDIRECT,
                },
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        maxAge: 60 * 60 * 24 * 30,
    },
    session: { jwt: true },
    pages: {
        signIn: "/login",
        signOut: "/",
        error: "/auth/error",
        signUp: "/signup",
        resetPassword: "/reset-password",
        forgotPassword: "/forgot-password",
    },
    callbacks: {
        async session({ session, token }) {
            session.user.id = token.sub;
            session.user.name = token.name;
            session.user.email = token.email;
            session.user.picture = token.picture;
            return session;
        },
        async jwt({ token, user }) {
            if (user) token.sub = user.id;
            return token;
        },
    },
};

// Main NextAuth handler, which uses authOptions
export async function auth(req, res) {
    return await NextAuth(req, res, authOptions);
}

export { auth as GET, auth as POST };
