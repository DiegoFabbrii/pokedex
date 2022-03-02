import Image from "next/image";
import style from "../styles/PokemonDetailsPage.module.css";
import Back from "./back";

export default function PokemonDetails({ pokemon }) {
    const { abilities, types } = pokemon;
    return (
        <section className={style.section}>
            <div className={style.container}>
                <Back />

                <h1>{pokemon.name}</h1>
                <Image
                    src={pokemon.pokemonImage}
                    alt={pokemon.name}
                    width="200px"
                    height="200px"
                />
                <div className={style.types}>
                    <span>Tipo:</span>
                    <ul>
                        {types.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={style["type_" + item.type.name]}
                                >
                                    {item.type.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={style.abilities}>
                    <span>Habilidades: </span>
                    <ul className={style.div}>
                        {abilities.map((item, index) => {
                            return <li key={index}>{item.ability.name}</li>;
                        })}
                    </ul>
                </div>

                <div className={style.physical_status}>
                    <div className={style.height}>
                        <span>Altura:</span>
                        <ul>
                            <li>{pokemon.height * 10} cm</li>
                        </ul>
                    </div>

                    <div className={style.weight}>
                        <span>Peso:</span>

                        <ul>
                            <li>{pokemon.weight / 10} kg</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
