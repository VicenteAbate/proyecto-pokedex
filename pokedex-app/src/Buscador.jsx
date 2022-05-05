import { useState } from "react";
import Pokemons from "./pokemons.js";
import pokemonsDos from "./pokemonsDOS.json"

const Buscador = () => {

  const [searchTerm, setSearchTerm] = useState("")

  return <div className="App">
    <input type="text" placeholder='Search' onChange={event =>{setSearchTerm(event.target.value)}} />
  {pokemonsDos.filter((val)=>{
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
  
