import style from "../styles/Pagination.module.css";

export default function Pagination({
    currentPage,
    totalPages,
    setCurrentPage,
}) {
    const handlesetCurrentPage = (e) => {
        setCurrentPage(Number(e.target.value));
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <nav className={style.container}>
            <ul className={style.buttonList}>
                {Array.from({ length: totalPages }).map((_, index) => {
                    return (
                        <li key={index}>
                            <button
                                value={index}
                                className={
                                    index === currentPage
                                        ? style.buttonActive
                                        : null
                                }
                                onClick={(e) => handlesetCurrentPage(e)}
                            >
                                {index + 1}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
