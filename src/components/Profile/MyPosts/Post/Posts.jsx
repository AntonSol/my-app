import React from "react";
import styles from './Posts.module.css'
import ProfileInfo from "../../ProfileInfo/ProfileInfo";
const Posts =(props)=>{
    return ( 
    <div className={styles.item}>
       {props.message}
       <div>
       <span>like </span>{props.like}
       </div>
        </div>
    )
}
export default Posts