import './FilterCheckbox.css';
import React from "react";

export function FilterCheckbox({ setIsShortMoviesChecked, isEnableCheckboxShort }) {

  const handleChange = (e) => {
    setIsShortMoviesChecked(e.target.checked);
    localStorage.setItem('isShortMoviesChecked', (e.target.checked))
  }

  return (
    <label htmlFor="short-films" className="search__toggle-label">
      <input id="short-films" type="checkbox" onChange={handleChange}
        className="search__toggle" disabled={ localStorage.getItem('isEnableCheckboxShort') === 'true' ? '' : "disabled"} />
      <span className="search__toggle_visible" />
    </label>
  )
}

