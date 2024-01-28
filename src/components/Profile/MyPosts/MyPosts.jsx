import React from "react";
import styles from './MyPosts.module.css'
import Posts from "./Post/Posts";

const MyPosts = (props) => {
let postsElement=props.posts.map(posts=>(<div key={posts.id}>
    {posts.message}
    Likes:{posts.like}
</div>))
    return <div>
        <div>
            New posts
        </div>
       {postsElement}
       
    </div>
}
export default MyPosts