import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import style from "../styles/Home.module.css";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Pokedex</title>
                <meta
                    name="description"
                    content="Uma pokedex com detalhes dos 151 primeiros pokemons."
                />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>

            <Header />
            <main className={style.main}>{children}</main>
            <Footer />
        </>
    );
}
