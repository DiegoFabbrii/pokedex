import PokemonCard from "../components/pokemonCard";

export default function Home({ results }) {
    console.log(results);
    return (
        <>
            <PokemonCard results={results} />
        </>
    );
}

export const getStaticProps = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const { results } = await res.json();

    return {
        props: { results },
    };
};
