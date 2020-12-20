import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/counter/userSlice'
import { auth } from './firebase'
import './Login.css'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("");

    const dispatch = useDispatch()



    const handleRegister = () =>{
      if (!name){
          return alert("Please enter a full name");
      }
      auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth)=>{
          userAuth.user.updateProfile({
              displayName: name,
              photoURL: profilePic
          })
          .then(()=>{
              dispatch(login({
                  email:userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: name,
                  photoURL:profilePic,
              }))
          })
      })          
    }
    const handleLogin = (e) => {
        e.preventDefault();

    }

    return (
        <div className="login">
            
        <img alt="" src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019-700x394.png
        "/>
        <form>
            <input value={name} onChange={e=> setName(e.target.value)} type="text" placeholder="Full name (required if registering)"/>

            <input value= {profilePic} onChange={e=>setProfilePic(e.target.value)} type="text" placeholder="Profile pic URL (optional)"/>

            <input  value= {email} onChange={e=> setEmail(e.target.value)} type="text" placeholder="Email"/>

            <input  value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password"/>

            <button type="submit" onClick={handleLogin}>Sign In</button>
            <p>Not a member?{" "}
            <span className="login_register" onClick={handleRegister}>Registered now</span>
            </p>
                
        </form>
        </div>
    )
}

export default Login
