import React from "react";
import { useRef,useState } from "react";
import './UserAuth.css';
import Button from "./Button";
import { signUp,logIn,useAuth,logOut } from "..";

const UserAuth = () => {
    const [loading,setLoading] = useState(false)
    const currentUser = useAuth();

    const userAuthForm = useRef();
    const logOutRef = useRef();
    

    const emailRef = useRef();
    const passwordRef = useRef();
    const userProfileContainer = document.querySelector('.userProfileContainer');



   
    async function handleUserSignUp(){
        let vEmail = emailRef.current.value;
        let vPassword = passwordRef.current.value;

        if(vPassword.length > 6 && vEmail.length >6){
            setLoading(true)
            try {
                await signUp(vEmail,vPassword);
            } catch {
                alert('alreadyRegistered')
                passwordRef.current.value = '';
            }
            setLoading(false)
        }
        else {
            alert('At least 6 character required!')
            emailRef.current.value = '';
            passwordRef.current.value = '';
        }
    }

    async function handleUserLogIn(){
        let vEmail = emailRef.current.value;
        let vPassword = passwordRef.current.value;

        if(vPassword.length > 6 && vEmail.length >6){
          
          try {
            await logIn(vEmail,vPassword);
            userAuthForm.current.style.display = 'none';
            userProfileContainer.style.display = 'flex';
          } catch {
            alert('honey please sign up');
            passwordRef.current.value = '';
          }
         
        }  
        else {
            alert('At least 6 character required!')
            emailRef.current.value = '';
            passwordRef.current.value = '';
        }
    }
    async function handleLogOut(){
        setLoading(true);
  try{
     logOut();
     passwordRef.current.value = '';
  }
  catch{
    alert('Error')
  }
  setLoading(false)
    }
    function setUserName(user){
        var userDisplay = document.getElementById('userDisplayName');
        var displayName = '';
       if(user){
        for(let i = 0; i< user.length - 10;i++)
        {
            displayName = displayName.concat(user[i])
        }
        userDisplay.innerHTML = displayName;
        return displayName;
       }
       else return ''
    }
    

    return(
        <div ref={userAuthForm} id = "userAuthForm" >
             <p style={{color:"black"}}>you are logged in as : <b>{setUserName(currentUser?.email)}</b></p>
          <div className="inputBox">
          <Input inputRef = {emailRef} inputType = "email" inputPlaceName="username"></Input>
          </div>
          <div className="inputBox">
          <Input inputRef = {passwordRef} inputType = "password" inputPlaceName = "password"></Input>
          </div>
      <div className="userAuthButton">
      <div id="userAuthBtn">
      <Button   onWriteBtnClick = {handleUserSignUp} value = 'Sign up' color = "blue" W='70px' H = '30px'> </Button>
      <Button   onWriteBtnClick = {handleUserLogIn} value = 'Log in' BtnColor = "blue" W='70px' H = '30px'> </Button>
      <Button buttonId = "disableAuthLO"  ref = {logOutRef}  btnDisable = {loading || !currentUser} onWriteBtnClick = {handleLogOut} value = 'Log out' BtnColor = "blue" W='70px' H = '30px'> </Button>
      </div>
      
      </div>
        </div>
    )
}
const Input = (props)=>{

    const inputStyleSheet = {
        width:'80%',
        height:'40px',
        border:'none',
        fontSize:'1.1rem',
        outline:'none',
        paddingLeft:'13px',
        backgroundColor:'#111',
        color:"whitesmoke"

    }

    return (
        <>
        <input id="inputBox" ref = {props.inputRef} style={inputStyleSheet}  type={props.inputType} placeholder={props.inputPlaceName} />
        </>
    )
}


export default UserAuth;
