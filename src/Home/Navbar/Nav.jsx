import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'
function Nav(){
    return(
      <header>
        <nav>
        <NavLink to='/home'><h1>Kun.uz</h1></NavLink>
        <ul>
        <NavLink to='/politics'><li>POLITICS</li></NavLink>
        <NavLink to='/society'><li>SOCIETY</li></NavLink>
        <NavLink to='/business'><li>BUSINESS</li></NavLink>
        <NavLink to='/teach'><li>TECH</li></NavLink>
        <NavLink to='/culture'><li>CULTURE</li></NavLink>
        <NavLink to='/sport'><li>SPORT</li></NavLink>
        <NavLink to='/tourism'><li>TOURISM</li></NavLink>
        </ul>
        <select name="lng" id="lng">
            <option value="eng">English</option>
            <option value="uzb">Uzbek</option>
        </select>
        </nav>
      </header>
    )
}

export default Nav;