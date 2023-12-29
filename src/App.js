import React from 'react';
import './App.css';
import { Route,Routes } from "react-router-dom";
import KUNUZ from './Home/KUN.UZ/KUN.UZ.jsx';
import Home from './Home/home-two/home.jsx';
import TURIZM from './Home/TOURISM/TOURISM.jsx';
import POLITICS from './Home/POLITICS/SOCIETY.jsx';
import SOCIETY from './Home/POLITICS/SOCIETY.jsx';
import BUSINESS from './Home/SPORT/SPORT.jsx';
import TECH from './Home/TECH/TECH.jsx';
import CULTURE from './Home/CULTURE/CULTURE.jsx';
import SPORT from './Home/SPORT/SPORT.jsx';
import TOURISM from './Home/TOURISM/TOURISM.jsx';




function App() {

  return (
    <div className="App">
      <Home/>
      <Routes>
    <Route path="/kun.uz" element={<KUNUZ/>}/>  
    <Route path="/ozbekiston" element={<POLITICS/>}/>  
    <Route path="/dunyo" element={<SOCIETY/>}/>
    <Route path="/jamiyat" element={<BUSINESS/>}/>
    <Route path="/sport" element={<TECH/>}/>
    <Route path="/madaniyat" element={<CULTURE/>}/>
    <Route path="/biznes" element={<SPORT/>}/>
    <Route path="/turizm" element={<TOURISM/>}/>
    </Routes>
    </div>
  );
}

export default App;