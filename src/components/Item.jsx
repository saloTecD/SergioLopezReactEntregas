import { Link } from "react-router-dom";

const Item = ({ item }) => {

    return (
        <Link to={"/item/" + item.id} className="text-decoration-none">
            <div className="card border-0" style={{ width: "18rem" }}>
                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                <div className="card-body text-center">
                    <p className="card-title text-bg-dark">{item.nombre}</p>
                </div>
            </div>
        </Link>
    )
}
export default Item;

