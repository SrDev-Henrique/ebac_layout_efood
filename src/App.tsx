import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from '@/styles/global'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import './fonts.css'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante/:id" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
