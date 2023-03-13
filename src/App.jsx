import { useState } from 'react'
import Bio from './pages/bio'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Podcast from './pages/podcast'
import Services from './pages/services/index'
import Storytelling from './pages/storytelling'
import MeditationCircle from './pages/meditationcircle'
import Pranic from './pages/services/pranic'
import ChildrenPrograms from './pages/services/childrenprograms'
import Counselling from './pages/services/counselling'
import ParentalGuidance from './pages/services/parentalguidance'
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
            <Route path="/services/childrenprograms" element={<ChildrenPrograms />} />
            <Route path="/services/counselling" element={<Counselling />} />
            <Route path="/services/parentalguidance" element={<ParentalGuidance />} />
            <Route path="/services/workshops" element={<Workshops />} />
            <Route path="/storytelling" element={<Storytelling />} />
            <Route path="/meditationcircle" element={<MeditationCircle />} />
            <Route path="/bio" element={<Bio />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
