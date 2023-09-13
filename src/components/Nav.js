import React from 'react'
import img1 from '../assets/icons8-m-50.png'
import { Link } from 'react-router-dom'
import "./NavStyle.css"

const Nav = () => {
  return (
    <div className='header'>
      <li><Link to='/'><img src={img1} alt='icon' /></Link></li>
      
      <ul className='routs'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Nav