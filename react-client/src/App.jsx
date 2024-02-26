import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Landing } from './pages/Landing/landingpage'
import { Auth } from './pages/auth'
import LoginPage from './pages/Login/LoginPage'



function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
        <Route path='/' element={<Landing/>}> </Route>
        <Route path='/auth' element={<Auth/>}> </Route>
        <Route path='/login' element={<LoginPage/>}> </Route>
    </Routes>
  </Router>
 </div>
  )
}

export default App
