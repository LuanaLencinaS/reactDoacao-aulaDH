//componete header
import React from "react";

//importo o componente link do método Routes...
import { Link } from "react-router-dom";

import "./style.css"

import imgLogo from "../../assets/img/logo1.svg";

export default function Header(props){

    const listaDeLinks = ["home", "contato", "Doações"]

    function loggar(){
        alert("usuario loggado")
    }
    
    return (
        <header className="row cor-azul m-0 topo-fixo d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-11 col-lg-10 col-xl-9">
                <nav className="navbar navbar-expand-md navbar-dark">
                    <a className="navbar-brand m-0" href="#">
                        <img src={imgLogo} alt="Logo" title="Logo" height="55px"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse submenu" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mt-lg-0">
                            {/* {listaDeLinks.map((link, index) => {
                                return (
                                <li className="nav-item" key={index}>
                                    <a className="nav-link" href="#">{link}</a>
                                </li>)
                            })} */}

                            <li className="nav-item">
                                {/* uso o componente importado com o atributo to, para ir até a página sem recarregar */}
                                <Link className="nav-link" to="/contato">Contatos</Link>
                            </li>
                        </ul>
                    </div>

                    {
                        props.logado ?
                        <h1 style={{fontSize:"1rem"}}>Oi usuario</h1> 
                        :
                        <button onClick={loggar}>logar</button>
                    }
                </nav>
            </div>
        </header>
    )
}