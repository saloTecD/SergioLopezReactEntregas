import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import Loading from "./Loading";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { id } = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const db = getFirestore();
        const itemsCollection = collection(db, "Productos");
        const queryCat = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(queryCat).then(elements => {
            setItems(elements.docs.map(element => ({ id: element.id, ...element.data() })));
            setLoading(false)
        });

    }, [id]);

    return (

        <div className="container my-5" id="ItemList">
            {loading ? <Loading /> : <ItemList items={items} />}


        </div>



    )
}

export default ItemListContainer;