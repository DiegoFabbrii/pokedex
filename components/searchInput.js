import style from "../styles/Search.module.css";
import { BiSearch } from "react-icons/bi";
import { useEffect } from "react";

export default function SearchInput({
    results,
    search,
    setSearchPokemon,
    handleSearch,
}) {
    useEffect(() => {
        if (search === "") return setSearchPokemon(results);

        const pokemonResearched = results.filter((pokemon) => {
            return pokemon.name.includes(search);
        });

        setSearchPokemon(pokemonResearched);
    }, [search, results, setSearchPokemon]);

    return (
        <>
            <div className={style.container}>
                <div className={style.search}>
                    <input
                        type="search"
                        value={search}
                        onChange={(e) => handleSearch(e)}
                        placeholder="Pesquise pelo nome"
                    />
                    <BiSearch />
                </div>
            </div>
        </>
    );
}
