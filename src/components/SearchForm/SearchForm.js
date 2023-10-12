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
    const curLocalStorageName = (window.location.pathname === '/movies') ? 'searchNameMovieForm' : 'searchNameSavedMovieForm';
    setFormValue({
      ...formValue,
      [name]: value
    });
    localStorage.setItem(curLocalStorageName, value)
  }

  function handleSearchMovies(e) {
    e.preventDefault();
    searchMovies(formValue.movie);
  }

  useEffect(() => {
    const curNameLocalStorage = (window.location.pathname === '/movies') ? 'searchNameMovie' : 'searchNameSavedMovie';
    const curLocalStorage = localStorage.getItem(curNameLocalStorage);
    if ((curLocalStorage !== '' && curLocalStorage !== null) && (curNameLocalStorage === 'searchNameMovie')) {
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
        <FilterCheckbox setIsShortMoviesChecked={setIsShortMoviesChecked} searchMovies={searchMovies}
          isEnableCheckboxShort={isEnableCheckboxShort} isShortMoviesChecked={isShortMoviesChecked} />
        <h3 className="search__filter-check-box-text">Короткометражки</h3>
      </div>
    </section>
  )
}

