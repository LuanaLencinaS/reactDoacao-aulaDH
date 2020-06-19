import React from 'react';
import "./style.css"

export default function Botao(props){
    return (
        //posso passar uma classe dinamica com js...
        <button className={"button " + props.tipo}>
            {props.texto}
        </button>
    )
}