import React from "react";
import styles from './MyPosts.module.css'
const MyPosts = (props) => {
let postsElement=props.posts.map(posts=>(<div><div className={styles.post}>
    {posts.message}</div>
    <div className={styles.likes}> Likes:{posts.like}</div>
</div>))
let newPostElement=React.createRef()
let newPost=()=>{
   let text=newPostElement.current.value
    alert(text)
} 
    
    return <div>
        
        <div>
            <textarea ref={newPostElement}></textarea>
            <div>
                <button onClick={newPost}> Add post</button>
            </div>
        </div>
       {postsElement}
       
    </div>
}
export default MyPosts