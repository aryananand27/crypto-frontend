import React, { useState,useContext } from 'react'
import { useNavigate,Link } from 'react-router-dom';

const Alert = () => {
    const ring=()=>{
        alert("Alarm is setted..");
    }
    const[coinname,setCoinName]=useState("");
    const[price,setPrice]=useState("");
    const [url,setUrl]=useState("");
    const navigate=useNavigate();

    const auth=JSON.parse(sessionStorage.getItem('user'));
    let userId;

    const alarm=async()=>{
        if(auth && auth.result){
            userId=auth.result._id;
        }
        let alert=[{coin:coinname,price:price}];
    
        let result=await fetch(`https://crypto-backend-opal.vercel.app/alert/${userId}`,{
          method:"Put",
          body:JSON.stringify({userId,alert}),
          headers:{
            'Content-Type':"application/json"
          }
        })
       
        result=await result.json();
       
        if(result.acknowledged){
            ring();
            navigate('/');
        }
        else if(result){
            ring();
            navigate('/');
           }
       
    }


  return (
    <div className="main-container">
    <div className='login-form'>
        <br/>
        <h2 className='main-heading'>Set Your Alarm</h2>
        <br/>
       
        <input type='email' value={coinname} onChange={(e)=>{setCoinName(e.target.value)}}  placeholder='Enter Coin Name'/>
        <br />
        <input type='text' value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter Price'/>
        <br />
    
        <button className='regbtn' onClick={alarm} >Set Alarm</button>
        <br/>
    </div>
</div>
  )
}

export default Alert
