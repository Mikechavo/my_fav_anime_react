import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './pages/Home';
import Berserk from './pages/Berserk';
import Goblin from './pages/Goblin';
import Jjk from './pages/Jjk';
import Header from './components/Header'
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="App">
      
      <header>
        <Header />
      </header>
      
      <main>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/berserk" element={<Berserk />} />
            <Route path="/jjk" element={<Jjk />} />
            <Route path="/goblin" element={<Goblin />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </div>

  );
}

export default App;
