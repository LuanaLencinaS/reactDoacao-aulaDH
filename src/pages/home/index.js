import React from "react";

import Card from "../../components/card";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Depoimentos from "../../components/depoimentos";
import Container from "../../components/container";
import imgLogo from "../../assets/img/logo1.svg";

export default function Home(props) {
    const listaDeCard = [
        <Card key={1} titulo="Doação de Roupa" descricao="descrição1" />,
        <Card key={2} titulo="Doação de Comida" descricao="descrição2" />,
        <Card key={3} titulo="Doação de Pet" descricao="descrição3" />
    ]

    return (
        //todas as divs devem estar encapsuladas numa div pai
        //fragments --> tags vazias com função de container, tudo nela vai pro root
        <> 
            <div className="App">
                <Header logado="true"/>

                {/* <h1>{logo ? logo : <p>componente</p>}</h1> */}

                <main className="container">
                    {listaDeCard}
                </main>

                <Container >
                    < Depoimentos titulo="Me ajudou muito!" depoimento="Doaram muitos alimentos aqui na minha região" autor="Jane Doe" />
                    < Depoimentos titulo="Meus pets agradecem!" depoimento="Ajudaram meus pets com a doação de ração :)" autor="Maria de Lurdes" />
                    < Depoimentos titulo="Ótimos voluntários!" depoimento="Fui muito bem tratado, agradeço a ajuda" autor="John Doe" />
                </Container>

                <Footer/>

            </div>
        </>
    );
}