import React from 'react'

const Table = ({data}) => {
   


  return (
    
    <div className='product-container'>
         
    <ul>
        <li>S.NO</li>
        <li>Coin Image</li>
        <li>Name</li>
        <li>Current_Price(In usd)</li>
        <li>
        price_change_24h</li>
        <li>market_cap</li>
    </ul>
  
   {data.map((items,index)=>{
      return ( <ul>
            <li>{index+1}</li>
            <li><img src={items.image} style={{width:"22px",height:"22px"}}
            /></li>
            <li>{items.name}</li>
            <li>{items.current_price}</li>
            <li>{items.price_change_24h}</li>
            <li>{items.market_cap}</li>
            
        </ul>)
    })}
    </div>
  )
}

export default Table
