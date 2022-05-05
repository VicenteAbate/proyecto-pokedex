import { useState } from "react";
import Pokemons from "./pokemons";
const Buscador = () => {
    const [searchTerm, setSearchTerm] = useState("")
    return <div className="App"><input type="text" placeholder='Search' onChange={event =>{setSearchTerm(event.target.value)}} />
    {Pokemons.filter((val)=>{
      if(searchTerm == ""){
        return val
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }
    }).map((val, key)=>{
      return (
      <div className="user" key={key}>
        <p>{val.name}</p>
        </div>
      )
  
    })}
    </div>

}

export default Buscador;