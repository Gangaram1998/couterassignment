import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { SignUp } from '../Redux/authReducer/action'
import { Link, useNavigate } from 'react-router-dom'

export const Signup = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [user,setUser]=useState({
        email:"",
        password:""
    })
    

    const handleClick=()=>{
        if(user.email=="" || user.password==""){
            alert("fill all details")
            return
        }
        dispatch(SignUp(user))
        .then(()=>{
            navigate("/login")
        })

    }
  return (
    <div style={{display:"flex",flexDirection:"column",maxWidth:"300px"}}>
        <h1>SIGN UP</h1>
        <input type="email" placeholder='Email' onChange={(e)=>setUser({...user,email:e.target.value})} /><br/>
        <input type="password" placeholder='Password' onChange={(e)=>setUser({...user,password:e.target.value})}/><br/>
        <button onClick={handleClick}>Sign Up</button>
        <Link to={"/login"}>Log in</Link>
    </div>

    //something to add 

  )
}
