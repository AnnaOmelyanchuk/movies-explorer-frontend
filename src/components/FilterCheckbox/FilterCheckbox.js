import './FilterCheckbox.css';
import React from "react";

export function FilterCheckbox() {

    const [isDisabled, setIsDisabled] = React.useState(false);

  return (
    <label htmlFor="short-films" className="search__toggle-label">
      <input id="short-films" type="checkbox" className="search__toggle" disabled ={isDisabled ? "disabled" : ''}  />
      <span className="search__toggle_visible" />
    </label>
  )
}