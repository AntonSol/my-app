import React from "react";
import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom";
const Navbar =()=>{
    return <nav className={styles.nav}>
    <div>
      <NavLink to="/profile" className = { navData => navData.isActive ? styles.active : styles.item }>Profile</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="/messages"className = { navData => navData.isActive ? styles.active : styles.item }>Messages</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="/news"className = { navData => navData.isActive ? styles.active : styles.item }>News</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="musik"className = { navData => navData.isActive ? styles.active : styles.item }>Musik</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink to="settings"className = { navData => navData.isActive ? styles.active : styles.item }>Settings</NavLink>
    </div>
  </nav>
}
export default Navbar