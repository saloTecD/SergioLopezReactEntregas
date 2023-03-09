import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getDoc, getFirestore,doc} from "firebase/firestore"
const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} = useParams();

    

    useEffect(()=>{
        const db=getFirestore();
        const document=doc(db,"Productos",id);
        getDoc(document,id).then(element =>{
            setItem({id:element.id, ...element.data()})
        })
    },[id])
    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;