import "./PokeList.css";
import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";

export const PokeList = () => {

    const [ allPokemons, setAllPokemons ] = useState([]);

    const getAllPokemons = async() => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=905&offset=0");
        const data = await res.json();
        console.log(data);

        function createPokemonObj(results) {
            results.forEach(async(pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.json();
                setAllPokemons((currentlist) => [...currentlist,data]);
                await allPokemons.sort((a,b) => a.id - b.id);
                // console.log(allPokemon);
            });
        }
        createPokemonObj(data.results);
        console.log(res);
    }

    useEffect(() => {
        getAllPokemons();
    },[]);

    return(
            <div className="app-container">
                <div className="pokemon-container">
                    <div className="all-container">
                    {allPokemons.map((pokemonStats) => (
                        <PokemonCard
                        key={pokemonStats.name}
                        id={pokemonStats.id.toString().padStart(3,"0")}
                        image={pokemonStats.sprites.other["official-artwork"].front_default}
                        name={pokemonStats.name.replace()}
                        type={pokemonStats.types[0].type.name}
                        weight={pokemonStats.weight}
                        height={pokemonStats.height}
                        stats={pokemonStats.stats.map((stat) => stat.base_stat).slice(0,5)}
                        statsName={pokemonStats.stats.map((stat) => stat.stat.name).slice(0,5)}
                        />
                    ))}
                    </div>          
                </div>
            </div>
    )
}