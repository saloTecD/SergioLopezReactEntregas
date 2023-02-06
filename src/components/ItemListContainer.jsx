
const ItemListContainer =(prop)=>{
    return(

        <div className="container-fluid d-flex align-items-center justify-content-center my-5" id="ItemList">
            <div className="row">
                <div className="col">
                    <h1>{prop.mensaje}</h1>
                </div>

            </div>

        </div>



    )
}

export default ItemListContainer;