import React from "react";
import './Movies.css';
import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";
import { Footer } from "../Footer/Footer";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";


export function Movies({ searchMovies, movies, loggedIn,
    setIsShortMoviesChecked, handleSaveMovie, handleDeleteMovie,
    isShortMoviesChecked, isEnableCheckboxShort, isLoading,
    notFoundMovies, savedMovies, setNotFoundMovies }) {

    return (
        <>
            <Header
                loggedIn={loggedIn} />
            <SearchForm searchMovies={searchMovies}
                isShortMoviesChecked={isShortMoviesChecked}
                setIsShortMoviesChecked={setIsShortMoviesChecked}
                isEnableCheckboxShort={isEnableCheckboxShort} />
            <MoviesCardList
                isShortMoviesChecked={isShortMoviesChecked}
                setIsShortMoviesChecked={setIsShortMoviesChecked}
                movies={movies}
                savedMovies={savedMovies}
                handleSaveMovie={handleSaveMovie}
                handleDeleteMovie={handleDeleteMovie}
                notFoundMovies={notFoundMovies}
                setNotFoundMovies={setNotFoundMovies}
                isLoading={isLoading} />
            <Footer />
        </>
    )
}


