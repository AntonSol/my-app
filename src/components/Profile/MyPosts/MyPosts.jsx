import React from "react";
import styles from './MyPosts.module.css'
import Posts from "./Post/Posts";
const MyPosts = () => {
    return <div>
        My posts
        <div>
            New posts
        </div>
        <Posts
            message='Hi are you? '
            like={<div>5 лукасов</div>}
        />
        <Posts message='Its my first post '
            like={<div>10 лукасов</div>} />
        <Posts />
    </div>
}
export default MyPosts