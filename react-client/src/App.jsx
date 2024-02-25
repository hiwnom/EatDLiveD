import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Landing } from './pages/Landing/landingpage'
import { Auth } from './pages/auth'



function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
        <Route path='/' element={<Landing/>}> </Route>
        <Route path='/auth' element={<Auth/>}> </Route>
    </Routes>
  </Router>
 </div>
  )
}

export default App
