'use client'

// pages/reset-password/[token].js

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

export default function ResetPasswordPage() {
  const { token } = useParams();
   const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (router.isReady) {
  //     // Extract token directly from `router.asPath` if `router.query` isn’t populated
  //     const tokenFromPath = router.asPath.split('/reset-password/')[1];
  //     setToken(tokenFromPath);
  //     setIsLoading(false);
  //   }
  // }, [router.isReady, router.asPath]);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    
    try {
      const response = await axios.post('/api/password/reset', { token, password }, {withCredentials:true});
      setMessage(response.data.message);
      // Redirect to login page or show success message
      router.push('/login');
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <form onSubmit={handlePasswordReset} className="p-4 m-auto mt-[12.5%] max-w-md text-center">
      <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
      {message && <p>{message}</p>}
      <div className="mb-4">
        <label>New Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border rounded w-full p-2 mt-1"
        />
      </div>
      <div className="mb-4">
        <label>Confirm New Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="border rounded w-full p-2 mt-1"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Reset Password</button>
    </form>
  );
}
