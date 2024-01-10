import React from "react";
import styles from './Posts.module.css'
const Posts =(props)=>{
    return ( 
    <div className={styles.item}>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTENrybzcoLwKmAYneHO7i8TCuBYBCOLAPm8EpnNaxXXZeI6MT9xLvx0FmomOMURbkEqUY&usqp=CAU"></img>
       {props.message}
       <div>
       <span>like </span>{props.like}
       </div>
        </div>
    )
}
export default Posts