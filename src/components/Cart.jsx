import { useContext } from "react";
import { CartContext } from "./context/CartContext";


const Cart = () => {


    const { cart, cartTotal, removeItem, clear, cartSum} = useContext(CartContext)

    if (cartTotal() === 0) {
        return (
            <div className="alert alert-warning" role="alert">
                No hay productos en el carrito
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table text-white">
                        <tr>
                            <td>&nbsp;</td>
                            <td>Nombre</td>
                            <td>Cantidad</td>
                            <td>Precio</td>
                            <td>&nbsp;</td>
                        </tr>
                        {
                            cart.map(item=>
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt="" width={300}/></td>
                                    <td>{item.nombre}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.precio*item.quantity}</td>
                                    <td><button onClick={()=>{removeItem(item.id)}}><img src="imagentrash" alt="aca va la imagen de la caneca" /></button></td>
                                </tr>
                            )
                        }
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Total a pagar</td>
                            <td><b>${cartSum()}</b></td>
                            <td></td>
                        </tr>
                    </table>
                    
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button onClick={()=>{clear()}}>Vaciar Carrito</button>
                </div>
            </div>
            
        </div>
    )
}

export default Cart;