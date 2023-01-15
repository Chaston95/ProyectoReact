import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return ( 
        <div className="row">
            <div className="col-md-3 offset-md-2 text-center">
                <img src={item.imagen} alt={item.nombre} className="img-fluid" />
            </div>
            <div className="col-md-4">
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p><b>${item.precio}</b></p>
                <ItemCount stockItem={item.stock} />
            </div>
        </div>
    )
}

export default ItemDetail;