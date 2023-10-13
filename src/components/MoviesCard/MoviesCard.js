import React, { useEffect, useState } from "react";
import "./MoviesCard.css";
import { useLocation, } from "react-router-dom";
import { URL_SOURCE_FILMS } from "../../utils/constants";

export function MoviesCard({ movie, handleSaveMovie,
    handleDeleteMovie, savedMovies, isShortMoviesChecked }) {

    const location = useLocation();
    const [isDeleteSelected, setIsDeleteSelected] = useState(false);
    const [isLiked, setIsLiked] = React.useState(false);
    const editedDuration = `${Math.trunc(movie.duration / 60)}ч ${movie.duration % 60}м`;

    function handleToogleLike() {
        if (window.location.pathname === '/movies') {
            isLiked ? handleDeleteMovie(savedMovies.find((savedMovie) => movie.id === savedMovie.movieId)) : handleSaveMovie(movie)
            setIsLiked(isLiked ? false : true);
        } else {
            handleDeleteMovie(movie)
        }
    }

    useEffect(() => {
        setIsDeleteSelected(window.location.pathname === '/saved-movies' ? true : false);
        setIsLiked(JSON.parse(localStorage.getItem('savedMovies')).some(savedMovie => {
            return movie.id === savedMovie.movieId
        }))
    }, [location, isShortMoviesChecked, movie])

    return (
        <li className="movies__item" >
            <div className='movies__photo-container'>
                <a href={movie.trailerLink} rel="noreferrer" target="_blank">
                    <img className="movies__photo" alt={movie.nameRU}
                        src={location.pathname === '/movies' ? URL_SOURCE_FILMS + movie.image.url : movie.image} />
                </a>
            </div>
            <div className="movies__item-box" >
                <p className="movies__item-title">{movie.nameRU}</p>
                <button onClick={handleToogleLike}
                    className={`movies__item-button ${isDeleteSelected ? 'movies__item-delete-button' : ''} 
                    ${isLiked && !isDeleteSelected ? 'movies__item-like-button-active'
                            : ''} ${!isLiked && !isDeleteSelected ? 'movies__item-like-button'
                                : ''}`} />
            </div>
            <p className="movies__item-duration">{editedDuration}</p>
        </li>
    )
}