import React from "react";
import styles from './ProfileInfo.module.css'
const ProfileInfo =()=>{
    return (
    <div>
  <div>
    <img src="https://kartinki.pibig.info/uploads/posts/2023-04/thumbs/1680592686_kartinki-pibig-info-p-mnogo-kotov-na-odnoi-kartinke-arti-38.jpg" alt="" />
  </div>
  <div className={styles.description}>
    ava+description
  </div>
  </div>)
}
export default ProfileInfo