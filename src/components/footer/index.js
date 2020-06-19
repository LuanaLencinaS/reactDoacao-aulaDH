// footer... 
// repetir o logo
// ter o copyrigth

import React from "react";

import "./style.css"
import imgLogo from "../../assets/img/logo192.png"

export default function Footer(){
    return (
        <footer className="row no-gutters d-flex justify-content-center align-items-center">
            <section className="footer-info col-12 w-100 d-flex justify-content-center align-items-center">
                logo
                <img src={imgLogo} alt="" width="100px"/>
            </section>

            <section className="col-12 w-100 d-flex justify-content-center align-items-center">
                © React - 2020
            </section>
        </footer>
    )
}