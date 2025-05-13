'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'

export default function SignupPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    password: ''
  })
  const [signupLoading, setSignupLoading] = useState(false)

  const handleGoogleSignUp = async () => {
    setIsLoading(true)
    try {
      await signIn('google', { callbackUrl: '/' })
    } catch (error) {
      console.error('Error signing up with Google:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupLoading(true);
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        // Success: maybe redirect or show a message
        alert('Signup successful!');
        // router.push('/login') or auto-login, etc.
      } else {
        alert(data.error || 'Signup failed');
      }
    } catch (err) {
      alert('An error occurred during signup');
    } finally {
      setSignupLoading(false);
    }
  };

  return (
    <div className="min-h-[300px] flex items-center justify-center bg-gradient-neon">
      <div className="glass-effect p-8 rounded-lg shadow-neon w-full max-w-md animate-fade-in">
        <h1 className="text-3xl font-bold text-center mb-8 text-gradient">Create Account</h1>
        
        <div className="space-y-4">
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 text-gray-700 bg-white"
              />
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 text-gray-700 bg-white"
              />
            </div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 text-gray-700 bg-white"
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create password"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 text-gray-700 bg-white"
            />
            <button
              type="submit"
              disabled={signupLoading}
              className="w-full bg-blue-600 text-white rounded-lg px-4 py-3 font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover-scale"
            >
              {signupLoading ? 'Signing up...' : 'Sign up'}
            </button>
          </form>

          <button
            onClick={handleGoogleSignUp}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-50 transition-all duration-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover-scale"
          >
            <FaGoogle className="text-red-500 text-xl" />
            <span>{isLoading ? 'Signing up...' : 'Sign up with Google'}</span>
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white/90 text-gray-500">Or</span>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => router.push('/login')}
              className="text-blue-600 hover:text-blue-800 font-medium hover-scale"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 