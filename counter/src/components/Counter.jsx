import React, { useState } from 'react'
import {RxCross2} from "react-icons/rx"
export const Counter = ({handleDelete,i}) => {
    const [value,setvalue]=useState(0)
    const [startvalue,setstartValue]=useState(0)
    const [setstart,setsetStart]=useState(false)
    const [name,setName]=useState("Tally Counter")
    const [setname,setSetName]=useState(false)
    const [n,setN]=useState("")
    const handleReduce=()=>{
        setvalue(prev=>prev-1)
    }

    const handleAdd=()=>{
        setvalue(prev=>prev+1)
    }
    const handleStart=()=>{
        setvalue(startvalue)
        setsetStart(false)
    }

  return (
    <div style={{border:"1px solid black", borderRadius:"10px",width:"300px",height:"400px",backgroundColor:"#666666",padding:"20px",boxSizing:"border-box",textAlign:"center",display:"flex",flexDirection:"column"}}>
        <h3 style={{color:"white"}}>{name}      <span ><RxCross2 style={{marginLeft:"30px",position:"relative"}} onClick={()=>{
            setName("Tally Counter")
            setvalue(0)
            handleDelete(i)
        }}/></span></h3>
        <input type="number" placeholder='' style={{padding:"10px 20px"}} value={value}/><br/>
        <div style={{marginTop:"-20px",marginBottom:"20px"}}>
        <button style={{width:"40%"}} onClick={handleReduce}>-</button>
        <button style={{width:"40%"}} onClick={handleAdd}>+</button><br/>
        </div>
        <button style={{padding:"10px 30px",borderRadius:"10px"}} onClick={()=>setvalue(0)}>RESET VALUE</button><br/>
        {!setstart && <button style={{padding:"10px 30px",borderRadius:"10px"}} onClick={()=>setsetStart(true)}>START VALUE</button>}
        {setstart && <div style={{display:"flex",borderRadius:"10px"}}><input type="number" placeholder='start value' style={{borderRadius:"10px",padding:"10px 20px",width:"100px"}} onChange={(e)=>setstartValue(e.target.value)} /><button style={{borderRadius:"10px",width:"100px"}} onClick={handleStart}>set</button><br/></div>}
        <br/>
        {!setname && <button style={{padding:"10px 20px",borderRadius:"10px"}} onClick={()=>setSetName(true)}>Set Name</button>}
        {setname && <div style={{display:"flex",borderRadius:"10px"}}><input type="text" placeholder='set Name' style={{borderRadius:"10px",padding:"10px 20px",width:"100px"}} onChange={(e)=>setN(e.target.value)} /><button style={{borderRadius:"10px",width:"100px"}} onClick={()=>{setName(n);setSetName(false)}}>set</button><br/></div>}
    </div>
  )
}
