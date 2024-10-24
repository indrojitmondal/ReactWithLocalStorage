import React from 'react';

const Bottle = ({ bottle,handleCarts }) => {
    const { img, price } = bottle;
    return (
        <div>
            <img src={img} alt="" />
            <div className='text-center space-y-2 pt-3'>
                <p>Price: $ {price}</p>
                <button 
                onClick={()=>{
                    handleCarts(bottle)
                }}
                 className='btn'>Purchase</button>
            </div>

        </div>
    );
};

export default Bottle;