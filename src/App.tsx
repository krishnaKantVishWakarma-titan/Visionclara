// import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'

// Import necessary routing components from react-router-dom
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Services } from './pages/Services'
import { Terms } from './pages/Terms'
import { Privacy } from './pages/Privacy'

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
