import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/statics/navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario'
import Footer from './components/statics/footer/Footer'
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem'
import ListaTema from './components/temas/listaTemas/ListaTema'
import './App.css';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost'
import CadastroTema from './components/temas/cadastroTema/CadastroTema'
import DeletePost from './components/postagens/deletePost/DeletePost'
import DeleteTema from './components/temas/deleteTema/DeleteTema'
import { Provider } from 'react-redux'
import store from './store/Store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <Provider store = {store}>
    <BrowserRouter>
    <ToastContainer />
      <Navbar />
      <div style={{ minHeight: '50vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/posts" element={<ListaPostagem />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path='/formularioPostagem' element={<CadastroPost />} />
          <Route path='/formularioPostagem/:id' element={<CadastroPost />} />
          <Route path='/formularioTema' element={<CadastroTema />} />
          <Route path='/formularioTema/:id' element={<CadastroTema />} />
          <Route path='/deletePostagem/:id' element={<DeletePost />} />
          <Route path='/deleteTema/:id' element={<DeleteTema />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter >
    </Provider>

  );
}

export default App
