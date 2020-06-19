import React from "react";
import Proptypes from "prop-types";

import Botao from "../botao";

import "./style.css"

export default function Card(props){
    return (
        <div className="card mt-2">
            <div className="card-body">
                <h1>{props.titulo}</h1>
                <p>{props.descricao}</p>

                < Botao texto="Eu quero" tipo="sucesso" />
            </div>
        </div>
    )
}

Card.propTypes = {
    titulo: Proptypes.string,
    descricao: Proptypes.string,
}