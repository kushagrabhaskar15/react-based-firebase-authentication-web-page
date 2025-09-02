import { React, useState } from 'react'
import Login from './components/login'
import './App.css'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <div className='Auth'>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<SignUp/>}/>
            </Routes>
            <ToastContainer/>
          </div>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
