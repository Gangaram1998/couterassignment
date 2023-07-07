import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LogIn } from '../Redux/authReducer/action'

export const Login = () => {
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
        
        dispatch(LogIn(user))
        .then(()=>{
            navigate("/")
        })

    }
  return (
    <div style={{display:"flex",flexDirection:"column",maxWidth:"300px"}}>
        <h1>Log In</h1>
        <input type="email" placeholder='Email' onChange={(e)=>setUser({...user,email:e.target.value})} /><br/>
        <input type="password" placeholder='Password' onChange={(e)=>setUser({...user,password:e.target.value})}/><br/>
        <button onClick={handleClick}>Log in</button>
        <Link to="/signup">Register</Link>
    </div>
  )
}
