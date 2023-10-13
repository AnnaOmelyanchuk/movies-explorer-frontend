import React from "react";
import './Movies.css';
import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";
import { Footer } from "../Footer/Footer";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";


export function Movies({ searchMovies, movies, loggedIn,
    setIsShortMoviesChecked, handleSaveMovie, handleDeleteMovie,
    isShortMoviesChecked, isEnableCheckboxShort, isLoading,
    notFoundMovies, savedMovies, setNotFoundMovies,
    setIsEnableCheckboxShort, setIsEnableCheckboxShortSavedMovie, isEnableCheckboxShortSavedMovie }) {

    return (
        <>
            <Header
                loggedIn={loggedIn} />
            <SearchForm searchMovies={searchMovies}
                movies={movies}
                isShortMoviesChecked={isShortMoviesChecked}
                setIsShortMoviesChecked={setIsShortMoviesChecked}
                isEnableCheckboxShort={isEnableCheckboxShort}
                isEnableCheckboxShortSavedMovie={isEnableCheckboxShortSavedMovie} />
            <MoviesCardList
                isEnableCheckboxShort={isEnableCheckboxShort}
                isShortMoviesChecked={isShortMoviesChecked}
                setIsEnableCheckboxShort={setIsEnableCheckboxShort}
                setIsEnableCheckboxShortSavedMovie={setIsEnableCheckboxShortSavedMovie}
                setIsShortMoviesChecked={setIsShortMoviesChecked}
                isEnableCheckboxShortSavedMovie={isEnableCheckboxShortSavedMovie}
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


