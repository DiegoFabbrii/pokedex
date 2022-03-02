import style from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.logo}>
                    <Link href="/">
                        <a>
                            <Image
                                src="/images/pokeball.png"
                                alt="pokedex log"
                                width="30px"
                                height="30px"
                            />
                            <h2>Pokedex</h2>
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    );
}
