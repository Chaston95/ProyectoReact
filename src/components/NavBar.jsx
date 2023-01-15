import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./Cartwidget";

const NavBar = () =>{
    return (
        <div className="row">
            <div className="col-md-5 d-flex  justify-content-end align-items-center">
              <nav className="navbar navbar-expand-lg navB">
                 <div className="container-fluid">
                     <Link className="navbar-brand" to={"/"}><img src="/images/icons8-3d-96.png" alt="logo 3D" width="50"/></Link>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarNav">
                     <ul className="navbar-nav">
                         <li className="nav-item">
                             <NavLink className="nav-link active" to={"/category/anime"}>Anime</NavLink>
                         </li>
                         <li className="nav-item">
                             <NavLink className="nav-link active" to={"/category/marvel"}>Marvel</NavLink>
                         </li>
                         <li className="nav-item">
                             <NavLink className="nav-link active" to={"/category/dc"}>DC</NavLink>
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