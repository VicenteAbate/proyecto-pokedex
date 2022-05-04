import { useEffect, useState } from "react";
import Pokemons from "./pokemons";

const Detalles =()=> {

    const [listaPokemons, setListaPokemons] = useState(null);

    useEffect(() => {
        const getData = async () => {
    
            try {
            const response = Pokemons
        
            setListaPokemons(response)
             console.log(response)
        
            } catch (error) {
                 console.log("Hay un error en tu API")   
                
            }      
                   
            }
            getData();
        }, []);

        return(
            <>
            <h1>hola</h1>
            {/* <div>{response}</div>
            <ul>{listaPokemons &&
        listaPokemons.map((item, i) => {
            <li key={i}>{item.Name}</li>
        })}
        </ul> */}
            </>
        )



}
export default Detalles; 