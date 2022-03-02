import Link from "next/link";
import { CgArrowLongLeft } from "react-icons/cg";
import style from "../styles/Back.module.css";

export default function Back() {
    return (
        <>
            <Link href="/../">
                <a className={style.link}>
                    <CgArrowLongLeft />
                    <span>Voltar</span>
                </a>
            </Link>
        </>
    );
}
