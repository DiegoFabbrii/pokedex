import Image from "next/image";
import Link from "next/link";
import style from "../styles/MainContent.module.css";
import SearchInput from "./searchInput";

export default function PokemonCard({
    results,
    handleSearch,
    searchPokemon,
    search,
    setSearchPokemon,
}) {
    return (
        <>
            <SearchInput
                results={results}
                setSearchPokemon={setSearchPokemon}
                search={search}
                searchPokemon={searchPokemon}
                handleSearch={handleSearch}
            />

            <div className={style.container}>
                {searchPokemon.map((pokemon, index) => {
                    return (
                        <div key={index} className={style.pokemonCard}>
                            <p>{pokemon.name}</p>
                            <div className={style.pokemonImg}>
                                <Image
                                    src={pokemon.pokemonImage}
                                    alt={pokemon.name}
                                    width="130px"
                                    height="130px"
                                />
                            </div>

                            <Link href={`/pokemon/${pokemon.id}`}>
                                <a>Detalhes</a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
