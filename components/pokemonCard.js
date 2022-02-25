import Image from "next/image";
import Link from "next/link";
import style from "../styles/MainContent.module.css";

export default function PokemonCard({ results }) {
    return (
        <div className={style.container}>
            {results.map((pokemon, index) => {
                const imageParams = `00${index + 1}`.slice(-3);
                const pokemonImage = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageParams}.png`;
                return (
                    <div key={index} className={style.pokemonCard}>
                        <p>{pokemon.name}</p>
                        <div className={style.pokemonImage}>
                            <Image
                                src={pokemonImage}
                                alt={pokemon.name}
                                width="130px"
                                height="130px"
                            />
                        </div>

                        <Link href={`/pokemon/${index + 1}`}>
                            <a>Detalhes</a>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
