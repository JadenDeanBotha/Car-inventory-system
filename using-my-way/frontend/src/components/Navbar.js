import React from 'react'
import {  Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <header >
      <div className='container'>
      <h1>Car inventory</h1>
      <Link to="/">Home</Link>
      <Link to="/DisplayOlder">Display Older</Link>
      </div>
        
    </header>
  )
}
