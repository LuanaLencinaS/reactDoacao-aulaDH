import React from "react";

import "./style.css"

export default function Card(){
    return (
        <div className="card mt-2">
            <div className="card-body">
                <h1>Doação de Alimento</h1>
                <p>estou doando para ajudar</p>

                <button className="btn btn-success">
                    Eu quero!
                </button>
            </div>
        </div>
    )
}