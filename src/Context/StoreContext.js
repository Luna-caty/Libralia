import React, { createContext, useState } from "react";
import { Books } from "../BookData";

//this function will allow us to get an object that will be the default state 
const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < Books.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
  const [cartItems, setCartItem] = useState(getDefaultCart())
  const [searchTerm,setSeatchTerm] = useState('')
  const [menu, setMenu] = useState('')
  const [discount,setDiscount] = useState([])

  //here we insert any data or function that we can have acces to in any component 



  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Books.find((book) => book.id === item)
        totalAmount += (cartItems[item] * itemInfo.price)
      }
    }
    return totalAmount
  }
  const getTotalCartDiscount = () => {
    let totalDiscount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Books.find((book) => book.id === item)
        if (itemInfo && itemInfo.discount) 
        {
          let discount = itemInfo.price * itemInfo.discountPrice * cartItems[item]
          totalDiscount += discount
        }
      }
    }
    return totalDiscount
  }
  
    
  const toggleDiscount = (e) => {
      if(discount.includes(e.target.value))
      {
          setDiscount(prev =>prev.filter(item=> item!== e.target.value))
      }
      else {
          setDiscount(prev =>[...prev,e.target.value])
      }

  }

    const contextValue = {
      Books,
      addToCart,
      removeFromCart,
      cartItems,
      getTotalCartAmount,
      getTotalCartDiscount,
      searchTerm,
      setSeatchTerm,
      menu,
      setMenu,
      discount,
      setDiscount,
      toggleDiscount,
    }
    return (
      //value={contextValue} allows us to have acces to data and functions outside this component 
      <StoreContext.Provider value={contextValue}>
        {props.children}
      </StoreContext.Provider>
    )

  }
export default StoreContextProvider