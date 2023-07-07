import React, { useState } from 'react'
import { Counter } from '../components/Counter'


export const Home = () => {
    const [totalC,setTotalC]=useState([])
    console.log(totalC)

    const handleDelete=(i)=>{
        let newArr=totalC
           let arr=newArr.filter((el,index)=>{
                if(i !== index){
                    return el
                }
           })
        setTotalC([...arr])
    }
  return (
    <div>
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
    </div>
  )
}
