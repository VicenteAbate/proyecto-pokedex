

const CardPokemon = (props) => {

    const { pokemon, index } = props

    return (
        
        <div className="tarjeta-general">
            <div className="nombre-id-tarjeta">
                <h2 key={index} className="poke-name">{pokemon.name}</h2>
                <p>{pokemon.id}</p>
            </div>
            <div className="contenido-inferior">
            <figure>
                <img id="Img-pokemons-buscador" src={pokemon.img} alt="figura pokemon" className="imagen"/>
                <span className="elements-span">
                    <p>{pokemon.elements.element1}</p><p>{pokemon.elements.element2}</p>
                </span>
            </figure>
            <div>
                <h3 >About</h3>
                <ul>
                    <li><b>WEIGHT</b><span>{pokemon.about.weight}</span> </li>
                    <li><b>HEIGHT</b><span>{pokemon.about.height}</span> </li>
                    <li><b>MOVES</b><span>{pokemon.about.moves}</span></li>
                </ul>
            </div>
            <p>{pokemon.info}</p>
            <div>
                <h3>Base Stats</h3>
                <ul>
                    <li><b>HP</b><span>{pokemon.baseStats.hp}</span> </li>
                    <li><b>ATK</b><span>{pokemon.baseStats.atk}</span></li>
                    <li><b>DEF</b><span>{pokemon.baseStats.def}</span></li>
                    <li><b>SATK</b><span>{pokemon.baseStats.satk}</span></li>
                    <li><b>SDEF</b><span>{pokemon.baseStats.sdef}</span> </li>
                    <li><b>SPN</b><span>{pokemon.baseStats.spd}</span></li>
                </ul>
            </div>
            </div>
        </div>
    )

}

export default CardPokemon;