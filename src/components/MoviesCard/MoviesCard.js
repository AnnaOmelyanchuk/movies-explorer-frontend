import React from "react";
import "./MoviesCard.css";
import movie_pic from '../../images/movie_pic.svg'
import { useLocation, } from "react-router-dom";

export function MoviesCard(props) {


    const location = useLocation();
    const [isDeleteSelected, setIsDeleteSelected] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(true);

    function handleToogleLike() {
        setIsLiked(isLiked ? false : true);
    }

    React.useEffect(() => {
        setIsDeleteSelected(window.location.pathname === '/saved-movies' ? true : false);
    }, [location])

    return (
        <li className="movies__item" >
            <div>
                <a href rel="noreferrer" target="_blank">
                    <img className="movies__photo" alt='movie' src={movie_pic} />
                </a>
            </div>
            <div className="movies__item-box" >
                <p className="movies__item-title">33 слова о дизайне</p>
                <button onClick={handleToogleLike}
                    className={`movies__item-button ${isDeleteSelected ? 'movies__item-delete-button' : ''} 
                    ${isLiked && !isDeleteSelected ? 'movies__item-like-button-active'
                            : ''} ${!isLiked && !isDeleteSelected ? 'movies__item-like-button'
                                : ''}`} />
            </div>
            <p className="movies__item-duration">1ч 47м</p>
        </li>
    )
}