import Navbar from './Components/Navbar';
import './Styles.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'


function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </Router>
    

    
    </div>
    
  );
}

export default App;
