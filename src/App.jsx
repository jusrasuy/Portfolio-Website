import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Services from './Pages/Services'
import './App.css'

function App() {

  return (
  
  <Router>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/services'  element={<Services/>} />
    </Routes>
  </Router>

  )
}

export default App
