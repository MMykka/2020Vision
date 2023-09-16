'use client'

import React,{createContext, useState, useEffect} from 'react'


export const CardContext = createContext()

const CardProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const addToCart = (product, id) => {
      // add product with amount
      const newItem = {...product, amount: 1};
      // check if item is already in cart
      const cartItem = cart.find((item) =>{
          return item.id === id;
      });

      if (cartItem) {
        const newCart= [...cart].map((item) => {
          if (item.id === id) {
            return {...item, amount: cartItem.amount + 1};
          } else {
            return item;
          }
        });
        setCart(newCart);
      }else {
        setCart([...cart, newItem]);
      }
        
      console.log(cart);
      // console.log(`${product.name} added to cart`);

    }

  return (
    <CardContext.Provider value={{cart,addToCart}}>
        {children}
    </CardContext.Provider>
  )
}

export default CardProvider