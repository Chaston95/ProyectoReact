import React from "react";
import { useEffect } from "react";
import {useState} from "react";

const ItemCount = ({stockItem}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItem);

    useEffect(() => {
        setStock(stockItem)
    }, [stockItem])

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const onAdd = () => {
        if (counter <= stock) {
            setStock(stock - counter);
            console.log("Agregaste: " + counter + " Productos al Carrito!");
            setCounter(1);
        }
    }

    return( 
        <div className= "container">
            <div className= "row mb-2">
                <div className= "col-md-2">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                         <button type="button" className="btn btn-outline-primary" onClick={decrementarStock}>-</button>
                         <button type="button" className="btn btn-outline-primary">{counter}</button>
                         <button type="button" className="btn btn-outline-primary" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className= "row">
                 <div className= "col-md-2">
                    <button className="btn btn-outline-primary"onClick={onAdd}> Agregar al carrito</button>
                 </div>
            </div>
        </div>
     );

}


export default ItemCount;