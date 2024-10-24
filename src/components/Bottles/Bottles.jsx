import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import Carts from '../Carts/Carts';
import { addToLS, getStoreCart, removeFromLS } from '../../utilities/localstorage';
// import { addToLS } from '../../utilities/localstorage';

const Bottles = () => {
   
    const [bottles, setBottles]= useState([]);
    const [carts, setCarts]= useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data));
    },[])
    
    useEffect(()=>{
        if(bottles.length>0){
        const storeCartID = getStoreCart();
        console.log(storeCartID);
         const saveCart = [];
          for (const id of storeCartID) {
              const bottle= bottles.find( bottle => bottle.id==id);
              if(bottle){
                saveCart.push(bottle);
              }
          }
          console.log(saveCart);
          
          setCarts(saveCart);
        }
    },[bottles])

    const handleCarts = (bottle)=>{
        const newCards= [...carts, bottle];
        setCarts(newCards);
        
        addToLS(bottle.id);
    }
    const handleRemoveFromCart = id =>{

         const remainingCart = carts.filter(bottle=> bottle.id !== id);
         setCarts(remainingCart);
        
        removeFromLS(id);
    }

    return (
        <div className='max-w-7xl mx-auto pt-3'>

           
          
            <h2 className='text-xl font-bold text-center'>Available Bottles: {bottles.length}</h2>
            <Carts carts={carts}
              handleRemoveFromCart={handleRemoveFromCart} 
             ></Carts>
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