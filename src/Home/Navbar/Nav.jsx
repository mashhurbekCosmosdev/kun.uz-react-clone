import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'
function Nav(){
    return(
      <header>
        <nav>
        <NavLink to='/home'><h1>Kun.uz</h1></NavLink>
        <ul>
        <NavLink to='/ozbekiston'><li>POLITICS</li></NavLink>
        <NavLink to='/dunyo'><li>SOCIETY</li></NavLink>
        <NavLink to='/jamiyat'><li>BUSINESS</li></NavLink>
        <NavLink to='/sport'><li>TECH</li></NavLink>
        <NavLink to='/madaniyat'><li>CULTURE</li></NavLink>
        <NavLink to='/biznes'><li>SPORT</li></NavLink>
        <NavLink to='/turizm'><li>TOURISM</li></NavLink>
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