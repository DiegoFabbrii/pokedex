import Image from "next/image";
import Link from "next/link";
import style from "../styles/PokemonCard.module.css";

export default function PokemonCard({ pokemon }) {
    return (
        <>
            {pokemon.map((item, index) => {
                return (
                    <div key={index} className={style.pokemonCard}>
                        <p>{item.name}</p>
                        <div className={style.pokemonImg}>
                            <Image
                                src={item.pokemonImage}
                                alt={item.name}
                                width="130px"
                                height="130px"
                            />
                        </div>

                        <Link href={`/pokemon/${item.id}`}>
                            <a>Detalhes</a>
                        </Link>
                    </div>
                );
            })}
        </>
    );
}
