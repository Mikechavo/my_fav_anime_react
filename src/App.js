import React from 'react';
import { Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import Home from './pages/Home';
import Berserk from './pages/Berserk';
import { NavLink } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <h1 className='title-page'>My Favorite Anime</h1>
      
      <main>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/berserk" element={<Berserk />} />
          </Routes>
        </div>
      </main>
    </div>

  );
}

export default App;
