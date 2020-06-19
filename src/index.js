//faz a estrutura rodar, renderiza a div com o root na index.html

import React from 'react';
import ReactDOM from 'react-dom'; //interpreta o que escrevemos em componente para virar dom

//importação do bootstrap via yarn add bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.min.js"

import App from './App';
//importamos a "página", como um componente principal
//todo componente criado precisa ter a letra inicial maiuscula

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* componente */}
  </React.StrictMode>,
  document.getElementById('root')
);
