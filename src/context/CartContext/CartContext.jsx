import React, { createContext } from 'react'

const CartContext = createContext({})

export const CartContextProvider = () => {
  return (
    <CartContext.Provider>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext