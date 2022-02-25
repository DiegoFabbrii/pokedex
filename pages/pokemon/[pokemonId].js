import Image from "next/image";

export default function PokemonDeatails({ pokemon }) {
    console.log(pokemon);
    const { types } = pokemon;
    return (
        <>
            <h1>{pokemon.name}</h1>
            <Image
                src={pokemon.pokemonImage}
                alt={pokemon.name}
                width="150px"
                height="150px"
            />
            {types.map((type, index) => {
                return (
                    <div key={index}>
                        <p>{type.type.name}</p>
                    </div>
                );
            })}
        </>
    );
}

export const getStaticPaths = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const { results } = await res.json();

    const paths = results.map((pokemon, index) => {
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
    const pokemon = {
        ...data,
        pokemonImage,
    };

    return {
        props: { pokemon },
    };
};
