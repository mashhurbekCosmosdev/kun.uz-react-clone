import React from 'react';
import './App.css';
import { Route,Routes } from "react-router-dom";
import Home from './Home/home_one/home.jsx';




function App() {

  return (
    <div className="App">
      <Routes>
   
    <Route path='/home' element={<Home/>}/>
    {/* <Route path="/kun.uz" element={<KUNUZ/>}/>   */}
    </Routes>
    </div>
  );
}

export default App;