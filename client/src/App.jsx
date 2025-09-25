import React from 'react'
import Register from './Components/Register'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Edit from './Components/Edit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path='/edit/:id' element={<Edit/>} />
      </Routes>
    </Router>
  )
}

export default App
