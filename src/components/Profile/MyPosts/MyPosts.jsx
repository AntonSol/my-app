import React from "react";
import styles from './MyPosts.module.css'
import Posts from "./Post/Posts";
const MyPosts =()=>{
    return <div>
    My posts
    <div>
        New posts
    </div>
       <Posts />
       <Posts />
       <Posts />
    </div>
}
export default MyPosts