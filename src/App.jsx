import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Welcome from './components/Welcome'
import Item from './components/Item'
import Navbar from './components/Navbar'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

// function Layout({ children }) {
//   const location = useLocation();
//   // Hide Navbar on login and register pages
//   const hideNavbar = ['/login', '/register'].includes(location.pathname);
//   return (
//     <>
//       {!hideNavbar && <Navbar />}
//       {children}
//     </>
//   );
// }

function App() {
  return (
    <Router>
       <Navbar></Navbar>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Welcome />} />
          <Route path="/menu" element={<Item />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Welcome />} />
        </Routes>
  
    </Router>
  )
}

export default App
