import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


const ItemCount = ({ stock, onAdd }) => {

    const [items, setItems] = useState(1);
    const [itemStock, setitemStock] = useState(stock)
    const [itemAdded, setItemAdded] = useState(false)



    const incrementarStock = () => {
        if (items < itemStock) {
            setItems(items + 1)
        }
    }

    const decrementarStock = () => {
        if (items > 1) {
            setItems(items - 1)
        }
    }

    const addToCart = () => {
        if (itemStock >= items) {
            setitemStock(itemStock - items)

            setItems(1)

            setItemAdded(true);
            onAdd(items);
        }

    }

    useEffect(() => {
        setitemStock(stock)
    }, [stock])

    return (

        <div className="container">


            <div className="row my-5">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-primary">{items}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementarStock}>+</button>
                    </div>
                </div>

            </div>
            <div className="row my-5">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"} className="btn btn-primary me-5">terminar compra</Link> : ""}
                    <button type="button" className="btn btn-primary" onClick={addToCart}>Agregar al Carrito</button>
                </div>
            </div>

        </div>
    )
}

export default ItemCount;

