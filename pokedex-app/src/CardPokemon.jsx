

const CardPokemon = (props) => {

const {pokemon, index} = props

return (
    <div className="tarjeta-general">
    <div className="nombre-id-tarjeta">
        <h2 key={index} className="poke-name">{pokemon.name}</h2>
        <p>{pokemon.id}</p>
    </div>
    <figure>
        <img id="Img-pokemons-buscador" src={pokemon.img} alt="figura pokemon" />
        <p>{pokemon.element}</p>
    </figure>
    <div>
        <h3 >About</h3>
        <ul>
            <li><span><b>WEIGHT</b>{pokemon.about.weight}</span> </li>
            <li><span><b>HEIGHT</b>{pokemon.about.height}</span> </li>
            <li><span><b>MOVES</b>{pokemon.about.moves}</span></li>
        </ul>
    </div>
    <p>{pokemon.info}</p>
    <div>
        <h3>Base Stats</h3>
        <ul>
            <li><span><b>HP</b>{pokemon.baseStats.hp}</span> </li>
            <li><span><b>ATK</b>{pokemon.baseStats.atk}</span></li>
            <li><span><b>DEF</b>{pokemon.baseStats.def}</span></li>
            <li><span><b>SATK</b>{pokemon.baseStats.satk}</span></li>
            <li><span><b>SDEF</b>{pokemon.baseStats.sdef}</span> </li>
            <li><span><b>SPN</b>{pokemon.baseStats.spd}</span></li>
        </ul>
    </div>
</div>
)

}

export default CardPokemon;