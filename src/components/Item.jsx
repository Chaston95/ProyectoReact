import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
        return (
            <Link to={"/item/" + item.id} className="text-dark">
                <div className="card border border-0 mb-5" >
                    <img src={item.imagen} className="card-img-top" alt={item.nombre}/>
                    <div className="card-body text-center">
                         <p className="card-text">{item.nombre}</p>
                    </div>
                </div>
             </Link>
        )
}

export default Item;