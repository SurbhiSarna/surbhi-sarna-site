import { useState } from 'react'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Podcast from './pages/podcast'
import Services from './pages/services'
import Storytelling from './pages/storytelling'
import MeditationCircle from './pages/meditationcircle'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/services" element={<Services />} />
            <Route path="/storytelling" element={<Storytelling />} />
            <Route path="/meditationcircle" element={<MeditationCircle />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
