import { useEffect, useState } from "react";
import Pokemons from "./pokemons";

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

    const handleClick = () =>{
        const response = Pokemons();
      
        setListaPokemons(response);
        console.log(listaPokemons);
    }

    console.log(listaPokemons);

    return (
        <>
        {/* <h1>{listaPokemons[0].name}</h1> */}
        <button onClick={handleClick}>mundo</button> 
        <ul>
            {listaPokemons && listaPokemons.map((item, index) => (<li key={index}>{item.name}</li>))
            } 
        </ul>

        </>
    ) 

}
export default Detalles; 