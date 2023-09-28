import React from "react";
import './SavedMovies.css';
import { Header } from "../Header/Header";
import { SearchForm } from "../SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";


export function SavedMovies() {



    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </>
    )
}