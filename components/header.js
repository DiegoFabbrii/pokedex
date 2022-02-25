import style from "../styles/Header.module.css";
import Image from "next/image";
import NavBar from "./navBar";

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.logo}>
                    <Image
                        src="/images/pokeball.png"
                        alt="pokedex log"
                        width="30px"
                        height="30px"
                    />
                    <h2>Pokedex</h2>
                </div>

                <NavBar />
            </div>
        </header>
    );
}
