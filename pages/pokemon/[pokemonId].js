import PokemonDetails from "../../components/pokemonDetails";

export default function PokemonDeatails({ pokemon }) {
    return (
        <>
            <PokemonDetails pokemon={pokemon} />
        </>
    );
}

export const getStaticPaths = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const { results } = await res.json();

    const paths = results.map((_, index) => {
        return {
            params: {
                pokemonId: (index + 1).toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.pokemonId;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    const imageParams = `00${id}`.slice(-3);
    const pokemonImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageParams}.png`;
    const { name, types, abilities, weight, height } = data;
    const pokemon = {
        name,
        types,
        abilities,
        weight,
        height,
        pokemonImage,
    };

    return {
        props: { pokemon },
    };
};
