import React from "react";
import './Header.css';
import header__logo from '../../images/header__logo.svg'
import { Link } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { useLocation, } from "react-router-dom";

export function Header() {

  const location = useLocation();
  const [isDarkBackground, setIsDarkBackground] = React.useState(false);

  React.useEffect(() => {
    setIsDarkBackground(window.location.pathname === '/' ? true : false);
  }, [location])

  return (

    <section
      className={`header ${isDarkBackground ? '' : 'header_dark'}`}
    >
      <Link to="/">
        <img src={header__logo}
          className={`header__logo`}
          alt="Лого" />
      </Link>
      <Navigation isDarkBackground={isDarkBackground}/>

    </section>

  )
}

