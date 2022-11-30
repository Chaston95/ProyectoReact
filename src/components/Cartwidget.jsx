import React from "react";


const CartWidget = () => {
    return(
        <button type="button" class="btn position-relative colorCarro">
            <img src={"images/cart4.svg"} alt="Carrito" width={30}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> 1 </span>
        </button>
    )
}


export default CartWidget;