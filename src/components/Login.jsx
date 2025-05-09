import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'  // Updated import to use 'useNavigate'
import axios from 'axios'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const navigate = useNavigate()  // Using 'useNavigate' instead of 'useHistory'

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/api/login', formData)

      console.log('Login successful:', response.data)

      // Store the token in localStorage or sessionStorage
      localStorage.setItem('token', response.data.token)

      // Redirect to a protected route, e.g., dashboard
      navigate('/dashboard')  // Use 'navigate' to redirect

      alert('Login successful!')
    } catch (error) {
      console.error('Error:', error.response?.data?.message || error.message)
      alert(`Login failed: ${error.response?.data?.message || 'Something went wrong'}`)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors mb-4"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <span className="text-black text-sm">If not registered? </span>
          <Link to="/register" className="text-blue-600 underline text-sm">Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
