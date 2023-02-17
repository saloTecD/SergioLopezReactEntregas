import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import arrayJuegos from "./json/games.json"

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayJuegos.filter(item => item.categoria === id) : arrayJuegos);
            }, 2000)
        });
        promesa.then((respuesta) => {
            setItems(respuesta)
        })

    }, [id])


    return (

        <div className="container my-5" id="ItemList">

            <ItemList items={items} />

            
        </div>



    )
}

export default ItemListContainer;