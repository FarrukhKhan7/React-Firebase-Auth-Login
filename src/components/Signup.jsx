import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
<div className="bg-gray-50">
  <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
    <div className="max-w-[480px] w-full">
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
        <h1 className="text-slate-900 text-center text-3xl font-semibold">Sign up</h1>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">Email</label>
            <div className="relative flex items-center">
              <input name="email" ref={emailRef} type="email" required className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter email" />
            </div>
          </div>
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
            <div className="relative flex items-center">
              <input name="password" ref={passwordRef} type="password" required className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter password" />
            </div>
          </div>
           <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">Password Confirmation</label>
            <div className="relative flex items-center">
              <input name="password" ref={passwordConfirmRef} type="password" required className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" placeholder="Enter password" />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sign Up
          </button>
          <div className="w-full text-center mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
