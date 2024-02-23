import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
        <Route path='/' element={<Home/>}> </Route>
    </Routes>
  </Router>
 </div>
  )
}

export default App
