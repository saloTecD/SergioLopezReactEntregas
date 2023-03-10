import { createContext } from "react";

export const CartContext=createContext(1);

const CartContextProvider=({items,children})=>{
    console.log(items)
    const value=items
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;