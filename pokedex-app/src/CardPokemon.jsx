import { useEffect, useState } from "react";
import './App.css';

const CardPokemon = (props) => {

    const { pokemon, index } = props

    // INTENTOS DE SETEAR EL COLOR SEGÚN ELEMENT
    //opcion 2 tomando modelo

    // const colores = ({ :( , show, children }) => {
    //     const showHideClassName = show ? "App display-block" : "App display-none";
    // }

    // INTENTOS DE SETEAR EL COLOR SEGÚN ELEMENT
    //opción 1 con npm install --save styled-components 
    // const [estadoColor, setEstadoColor] = useState(null);

    // if (pokemon.elements.element1 === 'Electric'){

    //     const StyledCard = styled(div) `
    //     padding: 0.5em;
    //     margin: 0.5em;
    //     color: ${props => props.inputColor || "palevioletred"};
    //     background: papayawhip;
    //     border: none;
    //     border-radius: 3px;
    //   `;

    //   setEstadoColor(StyledCard);
    // }

    /* if element1 === electric : background-color: #F9CF30; 
    if element1 === fire : background-color: #F57D31;
    if element1 === Bug : background-color: #A7B723;      
    */


    return (

        <div className="tarjeta-general" /*className={showHideClassName} dentro de op2*/>  {/* probé con <StyledCard> pero no funcionó op1 */}
            <div className="nombre-id-tarjeta">
                <h2 key={index} className="poke-name">{pokemon.name}</h2>
                <p>{pokemon.id}</p>
                <img src=".img/Pokeball.png" alt="" />

            </div>
            <div className="contenido-inferior">
                <figure>
                    <img id="Img-pokemons-buscador" src={pokemon.img} alt="figura pokemon" className="imagen" />
                    <span className="elements-span">
                        <p>{pokemon.elements.element1}</p>
                        <p>{pokemon.elements.element2}</p>
                    </span>
                </figure>
                <div>
                    <h3 >About</h3>
                    <ul className="list-about">
                        <li className="itmes-about"><span className="weight-icon">{pokemon.about.weight}</span><span className="subtitles-about">Weight</span> </li>
                        <li className="itmes-about height"><span className="height-icon">{pokemon.about.height}</span><span className="subtitles-about">Height</span> </li>
                        <li className="itmes-about"><span>{pokemon.about.moves}</span><span className="subtitles-about">Moves</span></li>
                    </ul>
                </div>
                <p className="pokemon-info">{pokemon.info}</p>
                <div>
                    <h3>Base Stats</h3>
                    <div className="lists-base-stats">
                        <ul className="table-elements">
                            <li><span >HP</span> </li>
                            <li><span >ATK</span></li>
                            <li><span >DEF</span></li>
                            <li><span >SATK</span></li>
                            <li><span >SDEF</span> </li>
                            <li><span >SPN</span></li>
                        </ul>
                        <ul className="table-numbers">
                            <li> <span>{pokemon.baseStats.hp}</span></li>
                            <li>  <span>{pokemon.baseStats.atk}</span></li>
                            <li>  <span>{pokemon.baseStats.def}</span></li>
                            <li>  <span>{pokemon.baseStats.satk}</span></li>
                            <li>  <span>{pokemon.baseStats.sdef}</span></li>
                            <li>   <span>{pokemon.baseStats.spd}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CardPokemon;