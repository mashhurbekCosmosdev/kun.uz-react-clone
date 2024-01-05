import React from 'react';
import './App.css';
import { Route,Routes } from "react-router-dom";
import KUNUZ from './Home/KUN.UZ/KUN.UZ.jsx';
import Home from './Home/home-two/home.jsx';
import BUSINESS from './Home/SPORT/SPORT.jsx';
import TECH from './Home/TECH/TECH.jsx';
import CULTURE from './Home/CULTURE/CULTURE.jsx';
import SPORT from './Home/SPORT/SPORT.jsx';
import TOURISM from './Home/TOURISM/TOURISM.jsx';
import POLITICS from './Home/POLITICS/POLITICS.jsx';
import SOCIETY from './Home/SOCIETY/SOCIETY.jsx';




function App() {

  return (
    <div className="App">
      <Routes>
   
    <Route path='/home' element={<Home/>}/>
    <Route path="/kun.uz" element={<KUNUZ/>}/>  
    <Route path="/politics" element={<POLITICS/>}/>  
    <Route path="/society" element={<SOCIETY/>}/>
    <Route path="/business" element={<BUSINESS/>}/>
    <Route path="/teach" element={<TECH/>}/>
    <Route path="/culture" element={<CULTURE/>}/>
    <Route path="/sport" element={<SPORT/>}/>
    <Route path="/tourism" element={<TOURISM/>}/>
    </Routes>
    </div>
  );
}

export default App;