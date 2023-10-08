import './FilterCheckbox.css';
import React, { useEffect} from "react";

export function FilterCheckbox({ setIsShortMoviesChecked, isShortMoviesChecked }) {

  const handleChange = (e) => {
    setIsShortMoviesChecked(e.target.checked);
    localStorage.setItem('isShortMoviesChecked', (e.target.checked))
  }

  useEffect(() => {
    const curLocalStorageItem = (window.location.pathname === '/movies') ? 'isShortMoviesChecked' : 'isisShortMoviesCheckedForMoviesSaved';
    const curLocalStorage = localStorage.getItem(curLocalStorageItem);
    if (curLocalStorage !== '' && curLocalStorage !== null) {
      setIsShortMoviesChecked(curLocalStorage === 'true');
    } else {
      localStorage.setItem(curLocalStorageItem, '')
    }
  }, [window.location.pathname, isShortMoviesChecked])

  return (
    <label htmlFor="short-films" className="search__toggle-label">
      <input id="short-films" type="checkbox" onChange={handleChange} checked={isShortMoviesChecked}
        className="search__toggle" disabled={localStorage.getItem('isEnableCheckboxShort') === 'true' ? '' : "disabled"} />
      <span className="search__toggle_visible" />
    </label>
  )
}

