import './App.css';
import Buscador from './Buscador';
import Detalles from './Detalles';
import { useEffect, useState } from "react";
import Pokemons from "./pokemons.js";


function App(props) {

  // console.log(props)

  // const [listaPokemons, setListaPokemons] = useState(null);

  // useEffect(() => {
  //     const getData = async () => {

  //         try {
  //             const response = Pokemons();

  //             setListaPokemons(response);
           

  //         } catch (error) {
  //             console.log("Hay un error en tu API");

  //         }

  //     }
  //     getData();
  // }, []);


  return (
    <>
    <Buscador />
    <Detalles /> 

    </>
  );
}

export default App;
