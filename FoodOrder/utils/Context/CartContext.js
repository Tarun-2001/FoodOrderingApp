import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = (props)=>{
    const [cartObject,setCartObject] = useState({})
    return (
        <CartContext.Provider value={{cartObject,setCartObject}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider