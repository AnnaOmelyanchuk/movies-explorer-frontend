import React, { useEffect } from "react";
import './SearchForm.css';
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox";

export function SearchForm({ searchMovies, setIsShortMoviesChecked,
  isEnableCheckboxShort, isShortMoviesChecked }) {

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

  useEffect(() => {
    const curLocalStorage = localStorage.getItem((window.location.pathname === '/movies') ? 'searchNameMovie' : 'searchNameSavedMovie');
    if (curLocalStorage !== '' && curLocalStorage !== null) {
      setFormValue({
        movie: curLocalStorage.replace(/['"]+/g, '')
      });
    } else {
      setFormValue({
        movie: ''
      });
    }
  }, [window.location.pathname])

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
          isEnableCheckboxShort={isEnableCheckboxShort} isShortMoviesChecked={isShortMoviesChecked} />
        <h3 className="search__filter-check-box-text">Короткометражки</h3>
      </div>
    </section>
  )
}

