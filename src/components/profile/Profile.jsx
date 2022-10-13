import React from "react"; 
import { useState,useRef } from "react";
import './Profile.css'
import Button from '../Button'
import { logOut,useAuth } from "../..";
import UserAuth from "../UserAuth";




const Profile = () => {
   


   const username = 'anomyns@123';
   const userLoginForm = document.getElementById('userAuthForm');
   const profileContainer = useRef();
   
   const [followers,setFollowers] = useState(0);
   const [following,setFollowing] = useState(0);
   const currentUser = useAuth();


  (function(){
    if(currentUser)
    {
     userLoginForm.style.display = 'none';
     document.querySelector('.userProfileContainer').style.display = 'flex';
    }
  })()
   
    function handleLogOut()
    {
        logOut();
        document.getElementById('userAuthForm').style.display = 'flex';
        document.querySelector('.userProfileContainer').style.display = 'none';
    }
    return <>
     <UserAuth/>
    <div ref={profileContainer} className="userProfileContainer">
   
        <div className="userFollowerHistory moblieFollowerHistory">
        <Button bgColor="rgba(12, 12, 12, 0)" onWriteBtnClick = {handleLogOut} value = "Log out" buttonId = "userLogOut" C = "#111" W = "70px" H = "40px"/>
            <div className="userNameContainer">
                <div className="userProfilePic"></div>
                <span id="userDisplayName">{username}</span>
            </div>
            <FollowerStatus userFollower = {followers} userFollowing = {following} />
            
        </div>
       
        <div className="userPosts">
           <div>
        
           </div>
        </div>
    </div>

    </>
}


const FollowerStatus = (props) => {
    return (
    <div id="userProfilePage"> 
        <div className="userFollowerStatus">
        <span className="noOfFollowers"><b>{props.userFollower}</b> followers</span>
        <span className="noOfFollowings"><b>{props.userFollowing}</b> following</span>
    </div>
    </div>
    )
}




export default Profile;