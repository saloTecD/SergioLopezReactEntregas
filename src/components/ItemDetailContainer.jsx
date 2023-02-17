import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
// import arrayProductos from "./json/productos.json"
import arrayJuegos from "./json/games.json"
const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayJuegos.find(prod => prod.id === parseInt(id)))
            }, 2000)
        })
        promesa.then((respuesta) => {
            setItem(respuesta)
        })
    }, [id])
    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;