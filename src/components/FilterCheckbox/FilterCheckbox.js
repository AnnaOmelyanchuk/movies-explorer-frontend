import './FilterCheckbox.css';
import React, { useEffect } from "react";

export function FilterCheckbox({ setIsShortMoviesChecked, isShortMoviesChecked, searchMovies }) {

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
    if (curLocalStorage !== '' && curLocalStorage !== null) {
      setIsShortMoviesChecked(curLocalStorage === 'true');
    } else {
      localStorage.setItem(curLocalStorageItem, '')
    }
    //console.log(localStorage.getItem('isShortMoviesChecked'))
  }, [window.location.pathname, isShortMoviesChecked])

  return (
    <label htmlFor="short-films" className="search__toggle-label">
      <input id="short-films" type="checkbox" onChange={handleChange} checked={isShortMoviesChecked}
        className="search__toggle" disabled={localStorage.getItem('isEnableCheckboxShort') === 'true' ? '' : "disabled"} />
      <span className="search__toggle_visible" />
    </label>
  )
}

