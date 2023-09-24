import './App.css';
import React from "react";
import { Main } from "../Main/Main";
import { Movies } from "../Movies/Movies";
import { Profile } from "../Profile/Profile";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { NotFound } from "../NotFound/NotFound";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <div className='page'>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies/>} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
