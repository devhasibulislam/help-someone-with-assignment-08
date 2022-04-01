import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    //  console.log(props.product)
      const {name,img,seller,price,ratings} = props.product;
     
    return (
        <div className='single-product'>   
                <div>
                <img src={img} alt=""/>
                </div>
               
               <div className='product-habijai'>
                   <h4>{name}</h4>
                    <p>Company: {seller}</p>
                    <p>Price: ${price}</p>
                    <p> Rating: {ratings}</p>
               </div>
               <button  onClick={()=>props.handlecart(props.product)} className='btn-cart' >Add to cart
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
               </button>
               
        </div>
       
    );
};

export default Product;