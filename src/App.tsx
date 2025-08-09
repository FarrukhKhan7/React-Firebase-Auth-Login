import React from "react"
import Signup from "./components/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import Admin from "./components/Admin"

function App() {
  return (
    <div>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<PrivateRoute>{<Dashboard />}</PrivateRoute>} />
              <Route path="/update-profile" element={<PrivateRoute>{<UpdateProfile />}</PrivateRoute>} />
              <Route path="/admin" element={<PrivateRoute adminOnly={true}>{<Admin />}</PrivateRoute>} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
    </div>
  )
}

export default App
