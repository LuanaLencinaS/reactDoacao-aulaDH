import React from 'react';
//importação da biblioteca react

import "./global.css"
//importo o css
//esse css sobrescreve o do componente

// importo o arquivo routes que criei
import Routes from "./Routes";

export default function App() {
  return <Routes/>;
}