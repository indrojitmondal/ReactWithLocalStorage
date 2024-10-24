import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    const {img,id}=cart;
    return (
        <div>

            <img className='w-20' src={img} alt="" />
            <button
             onClick={()=>{
                handleRemoveFromCart(id);
             }}
             className='btn'>Remove</button>
            
        </div>
    );
};

export default Cart;