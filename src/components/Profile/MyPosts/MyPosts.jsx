import React from "react";
import styles from './MyPosts.module.css'
import Posts from "./Post/Posts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
const MyPosts = () => {
    return <div>
       <div>
       </div>
        <div>
            New posts
        </div>
        <Posts message='Hi are you? 'like='10'/>
        <Posts message='Its my first post 'like='33'/>
    </div>
}
export default MyPosts