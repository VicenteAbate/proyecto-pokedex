import { useState } from "react";
import Pokemons from "./pokemons.js";
import pokeball from "./img/Pokeball.png"

const Buscador = () => {

  const [searchTerm, setSearchTerm] = useState("")

  const pokemons = Pokemons()

  const filterPokemons = (pokemones) => pokemones.filter((pokemon)=>  pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) )
   
  const pokemonsFilter = filterPokemons(pokemons)

  return <div className="App">
    
    
    <h1><img id="Pokeball" src={pokeball} alt="" />Pokedex</h1>
    <input type="text" placeholder='Search' onChange={event =>{setSearchTerm(event.target.value)}} />
  {pokemonsFilter.map((pokemon, key)=>{
    return (
    <div className="user" key={key}>
      {/* <img src={pokemon.img} alt="figura pokemon" /> */}
      <p>{pokemon.id}<br/></p>
      <img id="Img-pokemons-buscador" src={pokemon.img} alt="figura pokemon" /><br/>
      <p>{pokemon.name}</p>
    </div>
    )

  })}
  </div>
}
export default Buscador;



/*  <h3>About</h3>
      <span><b>WEIGHT</b>{pokemon.about.weight}</span> <br/>
      <span><b>HEIGHT</b>{pokemon.about.height}</span> <br/>
      <span><b>MOVES</b>{pokemon.about.moves}</span> <br/>
      {pokemon.info}<br/>
      <h3>Base Stats</h3>
      <span><b>HP</b>{pokemon.baseStats.hp}</span> <br/>
      <span><b>ATK</b>{pokemon.baseStats.atk}</span> <br/>
      <span><b>DEF</b>{pokemon.baseStats.def}</span> <br/>
      <span><b>SATK</b>{pokemon.baseStats.satk}</span> <br/>
      <span><b>SDEF</b>{pokemon.baseStats.sdef}</span> <br/>
      <span><b>SPN</b>{pokemon.baseStats.spd}</span> <br/>
       */





