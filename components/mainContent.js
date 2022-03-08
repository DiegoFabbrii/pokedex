import style from "../styles/MainContent.module.css";
import SearchInput from "./searchInput";
import Pagination from "./pagination";
import { useState } from "react";
import PokemonCard from "./pokemonCard";

export default function MainContent({
    results,
    handleSearch,
    searchPokemon,
    search,
    setSearchPokemon,
}) {
    // pagination component programming logic
    const itensPerPage = 12;
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(results.length / itensPerPage);

    const startIndex = itensPerPage * currentPage;
    const endIndex = startIndex + itensPerPage;
    const currentIndex = results.slice(startIndex, endIndex);

    const pokemon = search === "" ? currentIndex : searchPokemon;

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
                <PokemonCard pokemon={pokemon} />
            </div>

            {search === "" ? (
                <Pagination
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            ) : null}
        </>
    );
}
