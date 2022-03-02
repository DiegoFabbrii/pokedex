import { useState } from "react";
import PokemonCard from "../components/pokemonCard";

export default function Home({ pokemon }) {
    const [searchPokemon, setSearchPokemon] = useState([]);
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    console.log(pokemon);

    return (
        <>
            <PokemonCard
                results={pokemon}
                searchPokemon={searchPokemon}
                search={search}
                setSearchPokemon={setSearchPokemon}
                handleSearch={handleSearch}
            />
        </>
    );
}

export const getStaticProps = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const { results } = await res.json();
    const pokemon = results.map((pokemon, index) => {
        const id = index + 1;
        const imageParams = `00${id}`.slice(-3);
        const pokemonImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageParams}.png`;
        return {
            ...pokemon,
            pokemonImage,
            id,
        };
    });

    return {
        props: { pokemon },
    };
};
