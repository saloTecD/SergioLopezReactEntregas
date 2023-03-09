import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import trash from "./images/trash.svg";


const Cart = () => {


    const { cart, cartTotal, removeItem, clear, cartSum} = useContext(CartContext)

    if (cartTotal() === 0) {
        return (
            <div className="alert alert-warning text-center" role="alert">
                No hay productos en el carrito
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table-color table align-middle">
                        <thead>
                        <tr>
                            <td>&nbsp;</td>
                            <td><b>Nombre</b></td>
                            <td><b>Cantidad</b></td>
                            <td><b>Precio</b></td>
                            <td>&nbsp;</td>
                       </tr>
                       </thead>
                       <tbody>
                        {
                            cart.map(item=>
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt="" width={300}/></td>
                                    <td>{item.nombre}</td>
                                    <td>({item.quantity})</td>
                                    <td>${item.precio*item.quantity}</td>
                                    <td><button className="btnVaciarCarrito" onClick={()=>{removeItem(item.id)}}><img src={trash} alt="eliminar producto" /></button></td>
                                </tr>
                            )
                        }
                        </tbody>
                        <tfoot>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td><div className="cellTotal">Total a pagar</div></td>
                            <td><div className="cellTotal">${cartSum()}</div></td>
                            <td></td>
                        </tr>
                        </tfoot>
                    </table>
                    
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col d-flex justify-content-end mb-5">
                    <button className="btnVaciarCarrito" onClick={()=>{clear()}}>Vaciar Carrito</button>
                </div>
            </div>
            
        </div>
    )
}

export default Cart;