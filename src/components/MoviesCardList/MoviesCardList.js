import React, { useEffect } from "react";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { ADDING_CARDS, QUANTITY_OF_CARD, WINDOW_WIDTH, SHORT_MOVIE_DURATION } from "../../utils/constants";

export function MoviesCardList({ movies, isShortMoviesChecked, isLoading,
    notFoundMovies, handleSaveMovie, handleDeleteMovie, savedMovies, setNotFoundMovies }) {

    useEffect(() => {
        window.addEventListener('resize', handleScreenWidth);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleScreenWidth);
    }, []);


    const [moreCards, setMoreCards] = React.useState();
    const [lengthCardsList, setLengthCardsList] = React.useState();
    const [isShowedMoreButton, setIsShowedMoreButton] = React.useState(false);
    const [initialCardsCur, setInitialCardsCur] = React.useState(() => {

        const windowSize = window.innerWidth;

        if (windowSize < WINDOW_WIDTH.SMALL) {
            return QUANTITY_OF_CARD.MIN
        } else if (windowSize <= WINDOW_WIDTH.MEDIUM) {
            return QUANTITY_OF_CARD.MEAN
        } else if (windowSize < WINDOW_WIDTH.LARGE) {
            return QUANTITY_OF_CARD.MAX
        }
        else if (windowSize > WINDOW_WIDTH.LARGE) {
            return QUANTITY_OF_CARD.MAX
        }
    });

    useEffect(() => {
        setLengthCardsList(handleFilterMovies(movies)?.length)
        const windowSize = window.innerWidth;
        if (windowSize <= WINDOW_WIDTH.SMALL) {
            setMoreCards(ADDING_CARDS.MIN)
        } else if ((windowSize >= WINDOW_WIDTH.SMALL + 1) &&
            (windowSize < WINDOW_WIDTH.MEDIUM)) {
            setMoreCards(ADDING_CARDS.MID)
        }
        else if (windowSize >= WINDOW_WIDTH.MEDIUM) {
            setMoreCards(ADDING_CARDS.MAX)
        }
    }, [window.innerWidth, movies?.length, isShortMoviesChecked]);

    function handleScreenWidth() {
        const windowSize = window.innerWidth;
        if (windowSize < WINDOW_WIDTH.SMALL) {
            setInitialCardsCur(QUANTITY_OF_CARD.MIN)
        } else if (windowSize <= WINDOW_WIDTH.MEDIUM) {
            setInitialCardsCur(QUANTITY_OF_CARD.MEAN)
        } else if (windowSize < WINDOW_WIDTH.LARGE) {
            setInitialCardsCur(QUANTITY_OF_CARD.MAX)
        } else if (windowSize > WINDOW_WIDTH.LARGE) {
            setInitialCardsCur(QUANTITY_OF_CARD.MAX)
        }
    }

    const handleFilterMovies = (movies) => {
        return movies?.filter((movie) => {
            if (isShortMoviesChecked) {
                return movie.duration <= SHORT_MOVIE_DURATION
            } else {
                return movie
            }
        })
    }

    const movieList = handleFilterMovies(movies)?.slice(0, initialCardsCur);

    function handleMoviesIncrease() {
        setInitialCardsCur(previousCur => { return previousCur + moreCards });
    }

    useEffect(() => {
        setIsShowedMoreButton(lengthCardsList > initialCardsCur ? true : false)
    }, [lengthCardsList, initialCardsCur, isShortMoviesChecked]);

    useEffect(() => {
        if (movieList?.length === 0) {
            localStorage.setItem('isEnableCheckboxShort', true)
            setNotFoundMovies(true)
        } else {
            setNotFoundMovies(false)
        }
    }, [lengthCardsList, movieList]);

    useEffect(() => {
        console.log('dfsssssd', savedMovies)
    }, []);

    return (
        <section className="movies">
            {isLoading && <Preloader />}
            {notFoundMovies && <span className="search__filter-check-box-text">Ничего не найдено</span>}
            <ul className="movies__grid" >
                {movieList?.map((movie) =>
                (<MoviesCard
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                    movie={movie}
                    savedMovies={savedMovies}
                    isShortMoviesChecked={isShortMoviesChecked}
                />))}
            </ul>
            <button onClick={handleMoviesIncrease}
                className={isShowedMoreButton ? 'movies__button-more ' :
                    `movies__button-more no-display`}>Еще</button>
        </section>
    )
}


