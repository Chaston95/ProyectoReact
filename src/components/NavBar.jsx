import React from "react";
import CartWidget from "./Cartwidget";

const NavBar = () =>{
    return (
        <div className="row">
            <div className="col-md-5 d-flex  justify-content-end align-items-center">
              <nav className="navbar navbar-expand-lg navB">
                 <div className="container-fluid">
                     <a className="navbar-brand" href="#"><img src="images/icons8-3d-96.png" alt="logo 3D" width="50"/></a>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarNav">
                     <ul className="navbar-nav">
                         <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#">Home</a>
                         </li>
                         <li className="nav-item">
                              <a className="nav-link active" href="#">Productos</a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link active" href="#">Nosotros</a>
                         </li>
                         <li className="nav-item">
                              <a className="nav-link active">Contactos</a>
                         </li>
                     </ul>
                     </div>
                    </div>
                </nav>
            </div>
            <div className="col-md-5 d-flex  justify-content-end align-items-center">
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar;