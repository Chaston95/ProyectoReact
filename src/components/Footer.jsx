import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3>REDES SOCIALES</h3>
                    </div>
                    <div className="col-md-6 text-end">
                        <p>
                            <a href={"https://www.facebook.com/toysstorecolombia/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"images/icons8-facebook-nuevo-48.png"} alt="Facebook" width={24} /></a>
                            <a href={"https://www.instagram.com/hellbot3d/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"images/icons8-instagram-48.png"} alt="Instagram" width={24} /></a>
                            <a href={"https://www.instagram.com/hellbot3d/"} target={"_blank"} className="me-3" rel="noreferrer"><img src={"images/icons8-whatsapp-48.png"} alt="WhasApp" width={24} /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;