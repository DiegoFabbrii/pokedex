import Link from "next/link";
import style from "../styles/NavBar.module.css";

export default function NavBar() {
    return (
        <nav>
            <ul className={style.navList}>
                <li className={style.navItem}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>

                <li className={style.navItem}>
                    <Link href="/about">
                        <a>Sobre</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
