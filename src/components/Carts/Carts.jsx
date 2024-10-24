import React from 'react';
import './carts.css'
import Cart from '../Cart/Cart';
const Carts = ({carts}) => {
    
    return (
        <div className='max-w-7xl mx-auto pt-3'>
            <h3 className='text-lg text-center font-bold'>Cart: {carts.length} </h3>
            <div className='w-1/2 mx-auto border border-gray-400 grid grid-cols-3 gap-5'>
             { 
               carts.map( cart => <Cart cart={cart}></Cart>)
             }
             </div>
           
        </div>
    );
};

export default Carts;