import React from "react";
import styles from './MyPosts.module.css'
const MyPosts = (props) => {
let postsElement=props.posts.map(posts=>(<div><div className={styles.post}>
    {posts.message}</div>
    <div className={styles.likes}> Likes:{posts.like}</div>
</div>))
let newPostElement=React.createRef()
let addPost=()=>{
   let text=newPostElement.current.value
    props.addPost(text)
} 
let onPostChange=()=>{

}

    return <div>
        
        <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <div>
                <button onClick={addPost}> Add post</button>
            </div>
        </div>
       {postsElement}
       
    </div>
}
export default MyPosts