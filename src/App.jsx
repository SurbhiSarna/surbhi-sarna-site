import React from 'react'
import Bio from './pages/bio'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Podcast from './pages/podcast'
import Services from './pages/services/index'
import Storytelling from './pages/storytelling'
import MeditationCircle from './pages/meditationcircle'
import Pranic from './pages/services/pranic'
import Childrenprograms from './pages/services/childrenprograms'
import Counselling from './pages/services/counselling'
import Parentingguidance from './pages/services/parentingguidance'
import Workshops from './pages/services/workshops'


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/pranic" element={<Pranic />} />
            <Route path="/services/childrenprograms" element={<Childrenprograms />} />
            <Route path="/services/counselling" element={<Counselling />} />
            <Route path="/services/parentingguidance" element={<Parentingguidance />} />
            <Route path="/services/workshops" element={<Workshops />} />
            <Route path="/storytelling" element={<Storytelling />} />
            <Route path="/meditationcircle" element={<MeditationCircle />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="*" element={<Home />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
