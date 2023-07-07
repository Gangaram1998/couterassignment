import React, { useState } from 'react'
import { Counter } from '../components/Counter'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'


export const Home = () => {
    const [totalC,setTotalC]=useState([])
    const {isAuth}=useSelector((store)=>store.authReducer)
    const navigate=useNavigate()

    const handleDelete=(i)=>{
        let newArr=totalC
           let arr=newArr.filter((el,index)=>{
                if(i !== index){
                    return el
                }
           })
        setTotalC([...arr])
    }
    if(!isAuth){
        <Navigate to={'/login'}/>
    }
  return (
    <div>
        <button onClick={()=>{
            sessionStorage.setItem("isAuth",false)
            navigate("/login")
        }}>Log out</button>
        <button style={{padding:"10px 20px",backgroundColor:"red",color:"white",border:"none",marginBottom:"40px"}} onClick={()=>{
            setTotalC([...totalC,1])
        }} >
            Add Counter
        </button>
        <div style={{display:"grid",gap:"20px",gridTemplateColumns:"repeat(3,1fr)"}}>
            {
                totalC.length>0 && totalC.map((_,i)=><Counter key={i} handleDelete={handleDelete} i={i}/>)
            }
        </div>
        {/* <div></div> */}
    </div>
  )
}
