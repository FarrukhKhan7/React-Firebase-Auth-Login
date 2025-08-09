import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
<div className="bg-gray-50">
  <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
    <div className="max-w-[480px] w-full">
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
        <h2 className="text-center text-2xl font-bold mb-4">Password Reset</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        {message && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            disabled={loading}
            type="submit"
            className="cursor-pointer w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Reset Password
          </button>
        </form>
        <div className="w-full text-center mt-3">
          <Link to="/login" className="text-indigo-600 hover:text-indigo-500 text-sm">
            Login
          </Link>
        </div>
        <div className="w-full text-center mt-2 text-sm">
          Need an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:text-indigo-500">
            Sign Up
          </Link>
      </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
