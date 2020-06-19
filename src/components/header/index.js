//componete header
import React from "react";

import "./style.css"

export default function Header(){

    const listaDeLinks = ["home", "contato", "Doações"]

    const loggado = false;

    function loggar(){
        alert("usuario loggado")
    }
    
    return (
        <header>
            <h1>logo</h1>

            {/* sempre que for fazer um looop para listar um array, precisa usar um map/filter/reduc com o return, pois o foreach não traz nenhum retorno */}
            <ul>
                {listaDeLinks.map((link) => {
                    return <li>{link}</li>
                })}
            </ul>

            {/* dentro do return o EJX só aceita if ternario */}

            {
                loggado ?
                <h1>Oi usuario</h1> 
                :
                <button onClick={loggar}>logar</button>
            }

            {/* em react não usamos eventos de DOM, pois ainda não é dom, por isso o padrao é usar os eventos js direto no elemento (lembrar que o nome do evento precisa ser camelcase) */}
            
        </header>
    )
}