'use client'
import { useState } from 'react';
import axios from 'axios';
import { MailIcon, Loader2 } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/password/forgot', { email }, {withCredentials: true});
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 md:p-8 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Forgot Password</h2>
        
        <label className="text-gray-700 font-medium">Email:</label>
        
        <div className="relative mb-4">
          <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email address"
            className="w-full pl-10 pr-4 py-2 border rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none transition duration-150 ease-in-out"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="animate-spin h-5 w-5 mx-auto" />
          ) : (
            'Request Password Reset'
          )}
        </button>
        
        {message && (
          <p className="mt-4 text-center text-sm text-gray-600">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
