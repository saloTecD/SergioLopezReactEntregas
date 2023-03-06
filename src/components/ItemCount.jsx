import { useEffect, useState } from "react";







const ItemCount = ({stock}) => {
    
    const [items, setItems] = useState(1);
    const [itemStock,setitemStock]=useState(stock)

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
    
    const onAdd=()=>{
        if(itemStock>=items){
            setitemStock(itemStock-items)
            
             setItems(1)
            console.log("Agregaste: "+items+" Al Carrito")
            
        }
        
    }

        useEffect(()=>{
            setitemStock(stock)
        },[stock])

    return (
        
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-primary">{items}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementarStock}>+</button>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-primary" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
            
        </div>
    )
}

export default ItemCount;

