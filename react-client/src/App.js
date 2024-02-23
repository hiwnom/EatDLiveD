import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Auth } from "./pages/auth";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="App">
       <Router>
       <Routes>
       <Route path='/' element={<Home/>}> </Route>
           <Route path='/auth' element={<Auth/>}> </Route>
       </Routes>
     </Router>
    </div>
   );
}

export default App;
