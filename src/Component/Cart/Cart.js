import React from 'react';
import './Cart.css'

const Cart = ({cart,handleReset,chooseLuckyOne}) => {
  
    
    
    return (
        <div className='cart'>
             <h1>Selected shoes</h1>
             {cart.map(singleItem=> <div key={singleItem.id} className="boot-name">
                 <img src={singleItem.img} alt="" />
                <p>{singleItem.name}</p>  
                 
                  </div> )}
             <button onClick={()=>chooseLuckyOne(cart)} className='choosecart'>CHOOSE ONE</button>
             <br />
             <button onClick={()=>handleReset()} className='choosecart1'>CHOOSE AGAIN</button>
        </div>
      
    );
};

export default Cart;