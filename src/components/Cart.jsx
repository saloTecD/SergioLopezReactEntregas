import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import trash from "./images/trash.svg";
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { Link} from "react-router-dom";


const Cart = () => {
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirm, setEmailConfirm]=useState("")
    const [orderId, setOrderId] = useState("")
    const [valido,setValido]=useState(false)

    const { cart, cartTotal, removeItem, clear, cartSum } = useContext(CartContext)

    const generarOrden = () => {
        const buyer = { name: nombre, email: email, phone: telefono }
        const fecha = new Date()
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}  ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        const order = { buyer: buyer, items: { cart }, date: date, total: cartSum() }

        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order).then(data => {
            setOrderId(data.id)
        })
        checkoutCarrito()
    }

    const checkoutCarrito=()=>{
        setTimeout(()=>{
            clear()
        },"2000")
    }

    const validarEmail=()=>{
        if(email!==emailConfirm){
            setValido(true)
        }else{
            setValido(false)
        }
    }
     if (cartTotal() === 0 && orderId==="") {
         return (
             <div className="alert alert-warning text-center" role="alert">
                 No hay productos en el carrito
             </div>
         )
     }

    if (orderId !== "") {
        return (
            <div className="container">
                <div className="alert alert-success text-center" role="alert">
                    <h3>Gracias por comprar,se ha generado la orden de compra : <b>{orderId}</b></h3>
                </div>
                <div className="alert alert-success text-center">
                   <h5> <Link className="navbar-brand" to="/" onClick={checkoutCarrito}>Haz Click aqui para seguir viendo nuestros productos</Link></h5>
                </div>
            </div>
        )
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 my-5">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" onInput={(e) => { setNombre(e.target.value) }} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Telefono</label>
                            <input type="text" className="form-control" id="telefono" onInput={(e) => { setTelefono(e.target.value) }} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" onInput={(e) => { setEmail(e.target.value) }} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailConfirm" className="form-label">Confirma tu Email</label>
                            <input type="text" className="form-control" id="emailConfirm" onBlur={(e) => { validarEmail()
                            setEmailConfirm(e.target.value)}} onChange={(e) => { validarEmail()
                                setEmailConfirm(e.target.value)}}/>
                            {valido ? <div id="emailHelp" className="form-text text-bg-danger">El Email no coincide</div>:""}
                        </div>

                        <button type="button" className="btn btn-primary" onClick={generarOrden} disabled={valido} >Generar Compra</button>
                    </form>
                </div>
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
                                cart.map(item =>
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt="" width={300} /></td>
                                        <td>{item.nombre}</td>
                                        <td>({item.quantity})</td>
                                        <td>${item.precio * item.quantity}</td>
                                        <td><button className="btnVaciarCarrito" onClick={() => { removeItem(item.id) }}><img src={trash} alt="eliminar producto" /></button></td>
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
                    <button className="btnVaciarCarrito" onClick={() => { clear() }}>Vaciar Carrito</button>
                </div>
            </div>
            
        </div>
    )
}

export default Cart;