import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import Carts from '../Carts/Carts';

const Bottles = () => {
   
    const [bottles, setBottles]= useState([]);
    const [carts, setCarts]= useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data));
    },[])

    const handleCarts = (bottle)=>{
        const newCards= [...carts, bottle];
        setCarts(newCards);
    }

    return (
        <div className='max-w-7xl mx-auto pt-3'>

           
          
            <h2 className='text-xl font-bold text-center'>Available Bottles: {bottles.length}</h2>
            <Carts carts={carts} ></Carts>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-4 gap-5'>
                 {
                    bottles.map((bottle,idx) => <Bottle key={idx} bottle={bottle} 
                        handleCarts={handleCarts}
                    ></Bottle>)
                 }
            </div>
            
            
        
        </div>
    );
};

export default Bottles;