import React, { useEffect, useState } from 'react';
import './cart.scss';
import CartItem from './cartItem';



function Cart() {
  const [logements,setLogements] = useState ([]);

  useEffect(fetchLogements, []);

  function fetchLogements(){
    fetch("logements.json")
    .then((res) => res.json()) 
    .then((res) => setLogements(res)) 
    .catch(console.error);

  }
  

  return (
    <>
      <div className="cart"> 
        {logements.map((logement)=>(
          <CartItem title={logement.title} imgUrl= {logement.cover} id = {logement.id} />
        ))}
      </div>
    </>
  );
}

export default Cart;