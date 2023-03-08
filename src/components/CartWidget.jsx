import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import cart from "./images/basket.svg"


const CartWidget = () => {
   
    const {cartTotal}=useContext(CartContext)
    
    return (
       
        <Link to ={"/cart"} className="btn position-relative">
            
            <img src={cart} alt="carrito" width={25}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartTotal()} 
                
            </span>
        
        </Link>

    )
}

export default CartWidget;