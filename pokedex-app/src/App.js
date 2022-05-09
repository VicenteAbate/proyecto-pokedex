import './App.css';
import Buscador from './Buscador';
import Detalles from './Detalles';
import { useEffect, useState } from "react";
import Pokemons from "./pokemons.js";
import './BuscadorEstilos.css';



function App(props) {


  return (
    <>
    <Buscador />
    <Detalles /> 

    </>
  );
}

export default App;
