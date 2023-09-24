import React from "react";
import './SearchForm.css';
//import search__icon from '../../images/search__icon.svg'
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";

export function SearchForm() {

  return (
    <section className="search">
      <form className="search__form">
        <fieldset className="search__form-fields">
          <input className="search__form-input" placeholder="Фильм" />
        </fieldset>
        <button type="submit" className="search__form-button" />
      </form>
      <div className="search__filter-check-box">
        <FilterCheckbox />
        <h3 className="search__filter-check-box-text">Короткометражки</h3>
      </div>
    </section>
  )
}
