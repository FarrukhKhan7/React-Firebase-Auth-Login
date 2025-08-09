import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import Header from "./Header"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
        <h2 className="text-center text-2xl font-bold mb-4">Profile</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <div className="mb-4">
          <strong className="font-semibold">Email:</strong> {currentUser?.email}
        </div>
        <Link
          to="/update-profile"
          className="w-full block text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update Profile
        </Link>
        <div className="w-full text-center mt-2">
          <button
            onClick={handleLogout}
            className="text-indigo-600 hover:text-indigo-500 text-sm font-medium focus:outline-none"
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  )
}
