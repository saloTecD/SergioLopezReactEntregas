import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDoc, getFirestore, doc } from "firebase/firestore"
import { Link} from "react-router-dom";
const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();
    const [idExist, setIdExist] = useState(true)



    useEffect(() => {
        const db = getFirestore();
        const document = doc(db, "Productos", id);
        getDoc(document, id).then(element => {
            setItem({ id: element.id, ...element.data() })
            if (element._document === null) {
                console.log("entro a null")
                setIdExist(false)
            }

        })
    }, [id])

    if (idExist === false) {
        return (
            <div className="alert alert-warning text-center" role="alert">
                <h3><b> El Producto que estas buscando no existe</b></h3>
                <h3><Link className="navbar-brand" to="/"><b> Haz click para ir a nuestro menu principal</b></Link></h3>
            </div>
        )
    }
    return (

        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;