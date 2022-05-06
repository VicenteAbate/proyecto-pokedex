import { useState } from "react";
import Pokemons from "./pokemons.js";

const Buscador = () => {

  const [searchTerm, setSearchTerm] = useState("")

  const pokemons = Pokemons()

  const filterPokemons = (pokemones) => pokemones.filter((pokemon)=>  pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) )
   
  const pokemonsFilter = filterPokemons(pokemons)

  return <div className="App">
    <input type="text" placeholder='Search' onChange={event =>{setSearchTerm(event.target.value)}} />
  {pokemonsFilter.map((pokemon, key)=>{
    return (
    <div className="user" key={key}>
      <img src={pokemon.img} alt="figura pokemon" />
      <p>{pokemon.name}{pokemon.id}{pokemon.about.weight}</p>
    </div>
    )

  })}
  </div>
}
export default Buscador;











// function Buscador() {
//     // const list = [
//     //   "Banana",
//     //   "Apple",
//     //   "Orange",
//     //   "Mango",
//     //   "Pineapple",
//     //   "Watermelon",
//     // ];
  
//     const list = Pokemons();
//     // console.log(list[1].name)

//   for (let index = 0; index < list.length; index++) {
//     const element = list[index];
//     console.log(element.name)

//     return (
//       <h1>{element}</h1>
//       )
    
//   }

//     return (
//       <h1>{list[1].name}</h1>
   

//     )
  

//     // const [filterList, setFilterList] = useState(list);
  
//     // const handleSearch = (event) => {
//     //   if (event.target.value === "") {
//     //     setFilterList(list);
//     //     return;
//     //   }
//     //   const filteredValues = list.filter(
//     //     (item) =>
//     //       item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
//     //   );
//     //   setFilterList(filteredValues);
//     // };
  
//     // return (
//     //   <div className="app">
//     //     <div>
//     //       Search: <input name="query" type="text" onChange={handleSearch} />
//     //     </div>
//     //     {filterList && filterList.map((item) => <div>{item}</div>)}
//     //   </div>
//     // );
//   }
  
