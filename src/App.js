import React from 'react';
//importação da biblioteca react

import "./global.css"
//importo o css
//esse css sobrescreve o do componente

import Header from './components/header' 
//importando o componente
//não passo o nome do arquivo js pois por ser index, ele já pega ela, por ser a principal
import Footer from './components/footer'
import Card from "./components/card"

import imgLogo from "./assets/img/logo192.png"

//um  componente
function App() {

  const logo = "logo"
  const listaDeCard = [<Card/>, <Card/>, <Card/>]

  return (
    //todas as divs devem estar encapsuladas numa div pai
    <div className="App">
      <h1>Página Inicial</h1>

      <Header/>

      <h1>{logo ? logo : <p>componente</p>}</h1>

      <main className="container">
       {listaDeCard}
      </main>

      {/* para importar imagens locais
      se fosse externa, era so por o link */}
      <img src={imgLogo} alt=""/>

      <Footer/>
    </div>
  );
}

export default App;
//exporta o componente