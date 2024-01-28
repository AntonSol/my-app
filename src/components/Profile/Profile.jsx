import React from "react";
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  let posts=[
    {id:0, message:'Hi are you? ', like:12},
    {id:1, message:'Its my first post ', like:1},
    {id:2, message:'YOU ', like:15},
]
  return <div>
    <ProfileInfo />
    <MyPosts posts={posts}/>
  </div>
}
export default Profile