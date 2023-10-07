import React from "react";
import './Movies.css';
import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";
import { Footer } from "../Footer/Footer";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";


export function Movies({ searchMovies, movies, loggedIn,
    setIsShortMoviesChecked, handleSaveMovie, handleDeleteMovie,
    isShortMoviesChecked, isEnableCheckboxShort, isLoading,
    notFoundMovies, savedMovies }) {

    return (
        <>
            <Header
                loggedIn={loggedIn} />
            <SearchForm searchMovies={searchMovies}
                setIsShortMoviesChecked={setIsShortMoviesChecked}
                isEnableCheckboxShort={isEnableCheckboxShort} />
            <MoviesCardList
                isShortMoviesChecked={isShortMoviesChecked}
                movies={movies}
                savedMovies={savedMovies}
                handleSaveMovie={handleSaveMovie}
                handleDeleteMovie={handleDeleteMovie}
                notFoundMovies={notFoundMovies}
                isLoading={isLoading} />
            <Footer />
        </>
    )
}


