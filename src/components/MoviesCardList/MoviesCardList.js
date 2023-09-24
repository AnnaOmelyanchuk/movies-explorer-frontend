import React from "react";
import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard/MoviesCard";



export function MoviesCardList() {

    const [isShowed, setIsShowed] = React.useState(true);
    const movieList = Array(10).fill('1');

    return (
        <section className="movies">

            <ul className="movies__grid">
                {movieList?.map(() => (
                    <MoviesCard />))}
            </ul>
            <button className={isShowed ? 'movies__button-more ' :
                `movies__button-more no-display`}>Еще</button>

        </section>
    )
}


