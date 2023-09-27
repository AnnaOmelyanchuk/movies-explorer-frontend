import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export function Navigation({ isDarkBackground }) {

    const [isMenuShown, setIsMenuShown] = React.useState(false);
    const [isLogged, setIsLogged] = React.useState(true);
    console.log(isDarkBackground)

    function handleCloseMenu() {
        setIsMenuShown(false);
    }

    function handleOpenMenu() {
        setIsMenuShown(true);
    }

    return (
        <div className='header__navigation'>
            <div>
                <Link to="/movies" className={isLogged ? "header__link header__link_type_movies" : 'no-display'}>Фильмы</Link>
                <Link to="/saved-movies" className={isLogged ? "header__link header__link_type_movies" : 'no-display'}>Сохранённые фильмы</Link>
            </div>
            <div className="header__login-navigation">
                <Link to="/signup" className={isLogged ? 'header__link header__link_type_register no-display' :
                    'header__link header__link_type_register no-display'}>Регистрация</Link>

                {isLogged ? <Link to="/profile" className={`header__link header__link_type_account header__menu-link_account 
                header__menu-link_account-upper 
                ${isDarkBackground ? 'header__menu_color_blue' : ''} `}>Аккаунт</Link> :
                    <Link to="/signin" className="header__link header__link_type_login">Войти</Link>}

            </div>
            <button className={true ? 'header__menu-button' : 'header__menu-button no-display'} onClick={handleOpenMenu} />
            <div className={isMenuShown ? 'header__menu visible visibility' : 'header__menu visibility'}>
                <button className="header__menu-close-button" onClick={handleCloseMenu} />
                <div className={isMenuShown ? 'header__menu-container' : 'header__menu-container'} >

                    <div className="header__menu-links">
                        <Link to="/" className="header__menu-link">Главная</Link>
                        <Link to="/movies" className="header__menu-link">Фильмы</Link>
                        <Link to="/saved-movies" className="header__menu-link">Сохранённые фильмы</Link>
                        <Link to="/profile" className="header__menu-link header__menu-link_account">Аккаунт</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

/*${isDarkBackground ? 'header__menu_color_blue' : 'header__menu_color_blue' }*/