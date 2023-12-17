import React from "react";
import './Navbar.module.css'
const Navbar =()=>{
    return <nav className='navbar'>
    <div className='item'>
      <a>Profile</a>
    </div>
    <div className='item'>
      <a>Messages</a>
    </div>
    <div className='item'>
      <a>News</a>
    </div>
    <div className='item'>
      <a>Musik</a>
    </div>
    <div className='item'>
      <a>Settings</a>
    </div>
  </nav>
}
export default Navbar