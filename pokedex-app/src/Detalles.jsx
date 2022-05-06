import { useEffect, useState } from "react";
import Pokemons from "./pokemons.js";
import CardPokemon from "./CardPokemon"

const Detalles = () => {

    const [listaPokemons, setListaPokemons] = useState(null);

    useEffect(() => {
        const getData = async () => {

            try {
                const response = Pokemons();

                setListaPokemons(response);


            } catch (error) {
                console.log("Hay un error en tu API");

            }

        }
        getData();
    }, []);

    return (
        // 
        <>
            {listaPokemons
                && listaPokemons.map((pokemon, index) => (
                    <CardPokemon pokemon={pokemon} index={index}/>

                ))}
            
        </>
    )

}
export default Detalles;

/*     {listaPokemons 
                && listaPokemons.map((pokemon, index) =>  (<ul key={index}>
            <li >  {pokemon.name}</li>
            <li ><h3>About</h3></li>
            <li ><span><b>WEIGHT</b>{pokemon.about.weight}</span> </li>
            <li></li>
            <li></li>
            <li></li>
                <ul> */