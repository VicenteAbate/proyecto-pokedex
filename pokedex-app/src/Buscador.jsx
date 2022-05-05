import { useState } from "react";
import Pokemons from "./pokemons";


function Buscador() {
    // const list = [
    //   "Banana",
    //   "Apple",
    //   "Orange",
    //   "Mango",
    //   "Pineapple",
    //   "Watermelon",
    // ];
  
    const list = Pokemons();

    const [filterList, setFilterList] = useState(list);
  
    const handleSearch = (event) => {
      if (event.target.value === "") {
        setFilterList(list);
        return;
      }
      const filteredValues = list.filter(
        (item) =>
          item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
      );
      setFilterList(filteredValues);
    };
  
    return (
      <div className="app">
        <div>
          Search: <input name="query" type="text" onChange={handleSearch} />
        </div>
        {filterList && filterList.map((item) => <div>{item}</div>)}
      </div>
    );
  }
  

export default Buscador;