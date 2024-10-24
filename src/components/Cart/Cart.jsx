import React from 'react';

const Cart = ({cart}) => {
    const {img}=cart;
    return (
        <div>

            <img className='w-20' src={img} alt="" />
            
        </div>
    );
};

export default Cart;