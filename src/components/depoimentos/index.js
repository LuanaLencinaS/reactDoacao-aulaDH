import React from 'react';
import "./style.css"

export default function Depoimentos(props){
    return (
        <div className="col-4 my-2">
            <div className="card mx-1">
                <div className="card-body">
                    <h1 className="card-title">
                        {props.titulo}
                    </h1>
                    <p className="card-text">
                        {props.depoimento}
                    </p>
                    <p className="text-right font-weight-bold text-primary">
                        {props.autor}
                    </p>
                </div>
            </div>
        </div>
    )
}