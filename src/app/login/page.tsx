'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [emailLoginLoading, setEmailLoginLoading] = useState(false)

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    try {
      await signIn('google', { callbackUrl: '/' })
    } catch (error) {
      console.error('Error signing in with Google:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailLoginLoading(true)
    try {
      await signIn('email', { email, callbackUrl: '/' })
    } catch (error) {
      console.error('Error signing in with email:', error)
    } finally {
      setEmailLoginLoading(false)
    }
  }

  return (
    <div className="min-h-[300px] flex items-center justify-center bg-gradient-neon">
      <div className="glass-effect p-8 rounded-lg shadow-neon w-full max-w-md animate-fade-in">
        <h1 className="text-3xl font-bold text-center mb-8 text-gradient">Welcome Back</h1>
        
        <div className="space-y-4">
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 text-gray-700 bg-white"
            />
            <button
              type="submit"
              disabled={emailLoginLoading}
              className="w-full bg-blue-600 text-white rounded-lg px-4 py-3 font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover-scale"
            >
              {emailLoginLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-50 transition-all duration-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover-scale"
          >
            <FaGoogle className="text-red-500 text-xl" />
            <span>{isLoading ? 'Signing in...' : 'Continue with Google'}</span>
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
            Don't have an account?{' '}
            <button
              onClick={() => router.push('/signup')}
              className="text-blue-600 hover:text-blue-800 font-medium hover-scale"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 