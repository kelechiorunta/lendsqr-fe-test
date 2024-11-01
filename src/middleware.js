// import { withAuth } from "next-auth/middleware";
// import { getToken } from "next-auth/jwt";
  
// export default withAuth({
//   callbacks: {
//     authorized: ({ token }) => {
//       // If token exists, user is authenticated; otherwise, redirect to sign-in page
//       return !!token;
//     },
    
//   },
//   pages: {
//      signIn: '/login', // Custom sign-in page
//     // forgotPassword: '/forgot-password'
//   },
// })
// ;

import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export default withAuth({
  callbacks: {
    authorized: ({req, token }) => {
      if (req.nextUrl.pathname.includes('/reset-password')) {
        return true;
      }
      // If a token exists, the user is authenticated
      return !!token;
    },
  },
  pages: {
    signIn: '/login', // Custom sign-in page
  },
});

// Specify the routes that should be protected
export const config = {
  matcher: [
    /*
      Add routes that need authentication here.
      Exclude /forgot-password by not listing it in the matcher array.
    */
    "/dashboard/:path*", // Example protected route (customize as needed)
    "/account/:path*", // Another example protected route (customize as needed)
  ],
};
