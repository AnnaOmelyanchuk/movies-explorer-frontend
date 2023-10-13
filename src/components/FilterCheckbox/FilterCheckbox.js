import './FilterCheckbox.css';
import React, { useEffect } from "react";
import { SHORT_MOVIE_DURATION } from "../../utils/constants";

export function FilterCheckbox({ setIsShortMoviesChecked, movies,
  isShortMoviesChecked, searchMovies, isEnableCheckboxShort, isEnableCheckboxShortSavedMovie }) {

  const handleChange = (e) => {
    const curLocalStorageName = (window.location.pathname === '/movies') ? 'searchNameMovieForm' : 'searchNameSavedMovieForm';
    const curLocalStorageItem = window.location.pathname === "/movies" ? 'isShortMoviesChecked' : 'isShortMoviesCheckedForMoviesSaved';
    setIsShortMoviesChecked(e.target.checked);
    localStorage.setItem(curLocalStorageItem, (e.target.checked))
    searchMovies(localStorage.getItem(curLocalStorageName))
  }

  useEffect(() => {
    const curLocalStorageItem = window.location.pathname === "/movies" ? 'isShortMoviesChecked' : 'isShortMoviesCheckedForMoviesSaved';
    const curLocalStorage = localStorage.getItem(curLocalStorageItem);

    setIsShortMoviesChecked(curLocalStorage === 'true');
/*
    localStorage.setItem('isEnableCheckboxShortSavedMovie', movies?.some(movie => {
      return movie.duration < SHORT_MOVIE_DURATION
    }))

    localStorage.setItem('isEnableCheckboxShort', movies?.some(movie => {
      return movie.duration < SHORT_MOVIE_DURATION
    }))*/

  }, [window.location.pathname, isShortMoviesChecked,
    isEnableCheckboxShort, isEnableCheckboxShortSavedMovie, movies])

  return (
    <label htmlFor="short-films" className="search__toggle-label">
      <input id="short-films" type="checkbox" onChange={handleChange} checked={isShortMoviesChecked}
        className="search__toggle" disabled={window.location.pathname === "/movies" ? !isEnableCheckboxShort : !isEnableCheckboxShortSavedMovie} />
      <span className="search__toggle_visible" />
    </label>
  )
}
/*
localStorage.getItem(window.location.pathname === "/movies" ? 'isEnableCheckboxShort' : 'isEnableCheckboxShortSavedMovie') === 'true' ? '' : "disabled"
*/
