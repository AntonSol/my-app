import React from "react";
import styles from './MyPosts.module.css'
const MyPosts = (props) => {
let postsElement=props.posts.map(posts=>(<div><div className={styles.post}>
    {posts.message}</div>
    <div className={styles.likes}> Likes:{posts.like}</div>
</div>))
    return <div>
        <div>
            New posts
        </div>
       {postsElement}
       
    </div>
}
export default MyPosts