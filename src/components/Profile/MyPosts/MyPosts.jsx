import React from "react";
import styles from './MyPosts.module.css'
import Posts from "./Post/Posts";
const MyPosts = () => {
    return <div>
        My posts
        <div>
            New posts
        </div>
        <Posts message='Hi are you? 'like='10'/>
        <Posts message='Its my first post 'like='33'/>
        <Posts />
    </div>
}
export default MyPosts