import React from "react";
import './SearchForm.css';
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";

export function SearchForm({searchMovies, setIsShortMoviesChecked, isEnableCheckboxShort }) {

  const [formValue, setFormValue] = React.useState({
    movie: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  function handleSearchMovies(e) {
    e.preventDefault();
    searchMovies(formValue.movie);
  }

  return (
    <section className="search">
      <form className="search__form"
        onSubmit={handleSearchMovies} >
        <fieldset className="search__form-fields">
          <input className="search__form-input" placeholder="Фильм"
            name="movie"
            value={formValue.movie}
            onChange={handleChange} />
        </fieldset>
        <button type="submit" className="search__form-button" />
      </form>
      <div className="search__filter-check-box">
        <FilterCheckbox setIsShortMoviesChecked={setIsShortMoviesChecked}
          isEnableCheckboxShort={isEnableCheckboxShort}  />
        <h3 className="search__filter-check-box-text">Короткометражки</h3>
      </div>
    </section>
  )
}

