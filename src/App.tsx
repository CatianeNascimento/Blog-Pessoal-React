import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Footer from './components/statics/footer/Footer'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: '50vh' }}>
    <Routes> 
     <Route path="/" element={<Home />} /> 
    <Route path="/login" element={<Login />} /> 
    <Route path="/home" element={<Home />} />
    {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App
