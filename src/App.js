import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../src/Nav/Nav.jsx';
import Home from '../src/pages/Home.jsx';
import About from '../src/pages/About.jsx';
import Menu from '../src/pages/Menu.jsx';
import Contact from '../src/pages/Contact.jsx';
import backgroundVideo from './image/background.mp4'; 

function App() {
  return (
    <Router>
      <div className="app">
        <video className="background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div className="overlay">
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
