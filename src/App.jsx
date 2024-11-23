import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Doctor from './components/Doctor'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
