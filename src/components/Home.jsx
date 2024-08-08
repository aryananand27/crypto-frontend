import React, { useEffect, useState,useContext } from 'react'
import Table from './Table';
import { CounterContext } from './context/count';
const Home = () => {
    const counterContext=useContext(CounterContext);
    let [data,setData]=useState([]);
let [alert,setAlert]=useState([])
    const auth=JSON.parse(sessionStorage.getItem('user'));
    let userId;
    const getData= async()=>{
        if(auth && auth.result){
            userId=auth.result._id;
        }
        let result=await fetch(`https://crypto-backend-opal.vercel.app/getalert/${userId}`,{
            method: 'GET',
            headers:{
                 'Content-Type':"application/json"
            }
        })
       
        
    
        if(result.err){
            alert(`${result.err}`);
        }
        else{
            if(result){
                result=await result.json();
                setAlert(result.alert)
            }
           
        }
        
    }


    const FetchApi=async()=>{
      
        let result= await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',{
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-M29P8MFVzitQtCLzSgXgyUnG'}
          })

          result=await result.json();
     
          return result;
      
    }
    setInterval(()=>{
        counterContext.setCount(counterContext.count+1);
    },1800000)


useEffect(()=>{
   FetchApi().then((data)=>{
    setData(data);
   });
   getData();
  if(alert){
    alert.forEach(element=>{
        let coins=data.find(obj=>obj.name===element.coin);
        if(coins){
            if(coins.current_price==element.price){
                alert(`${element.coin} has reached your criteria value $ ${coins.current_price}`);
            }
        }
       })
  }
   
},[counterContext.count]);


  return (
   

    <div style={{width:"100%",height:"auto",display:"flex", justifyContent:"center"}}>
        <Table data={data} />
    </div>
  )
}

export default Home
