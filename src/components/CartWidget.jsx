import cart from "./images/basket.svg"

const CartWidget = () => {
    return (

        <button type="button" class="btn position-relative">
            <img src={cart} alt="carrito" width={25}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                10
                
            </span>
        </button>


    )
}

export default CartWidget;