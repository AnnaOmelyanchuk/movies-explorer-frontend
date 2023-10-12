import './App.css';
import React from "react";
import { useEffect, useState } from 'react';
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { Profile } from "../Profile/Profile";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { NotFound } from "../NotFound/NotFound";
import { getMovies } from "../../utils/MoviesApi";
import api from "../../utils/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { SHORT_MOVIE_DURATION } from "../../utils/constants";

function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [allSavedMovies, setAllSavedMovies] = React.useState([]);
  const [allMovies, setAllMovies] = React.useState([]);
  const [notFoundMovies, setNotFoundMovies] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isShortMoviesChecked, setIsShortMoviesChecked] = React.useState(false);
  const [isEnableCheckboxShort, setIsEnableCheckboxShort] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('searchNameSavedMovieForm', '')
    setNotFoundMovies(false)
    setIsLoading(true);
    setLoggedIn(true);
    alert("Удачно")
    api.getUserInformationMe().then((userData) => {
      setCurrentUser({
        ...currentUser,
        name: userData.name,
        email: userData.email
      })
    })
      .catch(err => console.log(`Ошибка.....: ${err}`))
      .finally(() => {
        setIsLoading(false);
        setNotFoundMovies(false)
      })
  }

  const handleLogOut = () => {
    setLoggedIn(false)
    localStorage.removeItem('jwt');
    localStorage.removeItem('isEnableCheckboxShort');
    localStorage.removeItem('isShortMoviesChecked');
    localStorage.removeItem('isShortMoviesCheckedForMoviesSaved');
    localStorage.removeItem('movies');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('searchNameSavedMovie');
    localStorage.removeItem('searchNameMovie');
    setAllMovies([]);
    setMovies([]);
    setSavedMovies([]);
    setAllSavedMovies([]);
    setNotFoundMovies(false);
    setCurrentUser('');
  }

  const handleTokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api.checkToken(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          setCurrentUser(res)
        }
      })
        .catch(err => console.log(`Ошибка.....: ${err}`))
    }
  }

  useEffect(() => {
    handleTokenCheck();
    if ((location.pathname === '/signup' || location.pathname === '/signin') && loggedIn) {
      navigate('/movies', { replace: true });
    }
  }, [loggedIn])

  useEffect(() => {
    if (location.pathname === '/movies' || location.pathname === '/saved-movies') {
      Promise.all([api.getUserInformationMe(), api.getSavedMovies()])
        .then(([userData, movies]) => {
          setCurrentUser(userData);
          setAllSavedMovies(movies);
          setSavedMovies(movies);
          const curLocalStorageName = (window.location.pathname === '/movies') ? 'searchNameMovieForm' : 'searchNameSavedMovieForm';
          localStorage.getItem(curLocalStorageName)
          if (localStorage.getItem(curLocalStorageName) === '' || localStorage.getItem(curLocalStorageName) === null) {
            setSavedMovies(allSavedMovies);
            setMovies(allMovies);
          }
        })
        .catch((err) => {
          console.log(`Ошибка ${err}`);
        }
        )
    }
  }, [location.pathname, loggedIn])

  useEffect(() => {
    setSavedMovies(allSavedMovies);
  }, [allSavedMovies])

  const handleSearchMovies = (movies, nameMovie) => {
    const filterRegex = new RegExp(nameMovie, 'gi');
    return movies.filter((movie) => {
      return filterRegex.test(movie.nameRU)
    })
  }

  const searchMovies = (nameMovie) => {
    setNotFoundMovies(false);
    setIsLoading(true)
    localStorage.setItem((window.location.pathname === '/movies') ? 'searchNameMovie' : 'searchNameSavedMovie',
      JSON.stringify(nameMovie))

    if (window.location.pathname === '/saved-movies') {
      const searchResult = handleSearchMovies(allSavedMovies, nameMovie)
      if (searchResult.length === 0) {
        setNotFoundMovies(true);
        setSavedMovies([]);
      } else {
        localStorage.setItem('movies', JSON.stringify(searchResult))
        setSavedMovies(JSON.parse(localStorage.getItem('movies')));
        localStorage.setItem('isEnableCheckboxShort', (JSON.parse(localStorage.getItem('movies')).some(movie => {
          return movie.duration < SHORT_MOVIE_DURATION
        })))
      }
      setIsLoading(false);

    } else {

      if (allMovies.length === 0) {
        getMovies()
          .then((res) => {
            setAllMovies(res)
            const searchResult = handleSearchMovies(res, nameMovie)
            if (searchResult.length === 0) {
              setNotFoundMovies(true);
              setMovies([]);
            } else {
              localStorage.setItem('movies', JSON.stringify(searchResult))
              setMovies(JSON.parse(localStorage.getItem('movies')));
              localStorage.setItem('isEnableCheckboxShort', (JSON.parse(localStorage.getItem('movies')).some(movie => {
                return movie.duration < SHORT_MOVIE_DURATION
              })))
            }
          })
          .catch((err) => {
            console.log(`Ошибка ${err}`)
          })
          .finally(() => {
            setIsLoading(false);
          })
      } else {
        const searchResult = handleSearchMovies(allMovies, nameMovie)
        if (searchResult.length === 0) {
          setNotFoundMovies(true);
          setMovies([]);
          setIsLoading(false);
        } else if (searchResult.length !== 0) {
          localStorage.setItem('movies', JSON.stringify(searchResult));
          setMovies(JSON.parse(localStorage.getItem('movies')));
          localStorage.setItem('isEnableCheckboxShort', (JSON.parse(localStorage.getItem('movies')).some(movie => {
            return movie.duration < SHORT_MOVIE_DURATION
          })))
          setIsLoading(false);
          setNotFoundMovies(false);
        }
      }
    }
  }

  function handleSaveMovie(movie) {
    api.saveMovie(movie)
      .then((savedMovie) => {
        const films = [...savedMovies, savedMovie];
        localStorage.setItem('savedMovies', JSON.stringify(films));
        setAllSavedMovies(previousState => ([...previousState, savedMovie]));
      })
      .catch((err) => {
        console.log(`Ошибка ${err}, попробуйте еще раз`);
      })
  }

  function handleDeleteMovie(movie) {
    api.deleteMovie(movie)
      .then(() => {
        const newSavedMovies = savedMovies.filter((deletedMovie) => { return deletedMovie._id !== movie._id })
        setAllSavedMovies(newSavedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
      })
      .catch((err) => {
        console.log(`Ошибка ${err}, попробуйте еще раз`);
      })
  }

  return (
    <>
      <div className='page'>
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />} />

            <Route path="/profile" element={<ProtectedRouteElement
              element={Profile}
              loggedIn={loggedIn}
              setCurrentUser={setCurrentUser}
              handleLogOut={handleLogOut}
              currentUser={currentUser} />} />

            <Route
              path={"/signup"}

              element={<Register
                handleLogin={handleLogin} />} />

            <Route path="/signin" element={<Login
              handleLogin={handleLogin} />} />

            <Route path="/movies" element={<ProtectedRouteElement
              element={Movies}
              searchMovies={searchMovies}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              isLoading={isLoading}
              movies={movies}
              savedMovies={allSavedMovies}
              setMovies={setMovies}
              loggedIn={loggedIn}
              notFoundMovies={notFoundMovies}
              isShortMoviesChecked={isShortMoviesChecked}
              setIsShortMoviesChecked={setIsShortMoviesChecked}
              isEnableCheckboxShort={isEnableCheckboxShort}
              setNotFoundMovies={setNotFoundMovies}
            />} />

            <Route path="/saved-movies" element={<ProtectedRouteElement
              element={Movies}
              searchMovies={searchMovies}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              isLoading={isLoading}
              movies={savedMovies}
              savedMovies={allSavedMovies}
              setMovies={setMovies}
              loggedIn={loggedIn}
              notFoundMovies={notFoundMovies}
              isShortMoviesChecked={isShortMoviesChecked}
              setIsShortMoviesChecked={setIsShortMoviesChecked}
              isEnableCheckboxShort={isEnableCheckboxShort}
              setNotFoundMovies={setNotFoundMovies}
            />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
