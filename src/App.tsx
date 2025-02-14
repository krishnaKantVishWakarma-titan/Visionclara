// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import necessary routing components from react-router-dom
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Services } from './pages/Services'
import { Terms } from './pages/Terms'
import { Privacy } from './pages/Privacy'

// Define the routes as a JSON object
const routes = [
  { path: "/", component: <Home /> },
  { path: "/about", component: <About /> },
  { path: "/contact", component: <Contact /> },
  { path: "/services", component: <Services /> },
  { path: "/terms", component: <Terms /> },
  { path: "/privacy", component: <Privacy /> },
];

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
