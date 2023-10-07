import React from 'react';
import './Main.css';
import { Header } from "../Header/Header.js";
import { Promo } from "../Promo/Promo";
import {NavTab} from "../NavTab/NavTab"
import { AboutProject } from "../AboutProject/AboutProject";
import { Techs } from "../Techs/Techs";
import { AboutMe } from "../AboutMe/AboutMe";
import { Portfolio } from "../Portfolio/Portfolio";
import { Footer } from "../Footer/Footer";



export function Main({loggedIn}) {
    return (
        <>
            <Header loggedIn={loggedIn} />
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </>

    )
}
