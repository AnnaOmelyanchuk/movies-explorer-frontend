import React from "react";
import './Profile.css';
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";


export function Profile() {

    return (
        <>
            <Header />
            <section className="profile">
                <h2 className="profile__title">Привет, Виталий!</h2>
                <form className="profile__form">

                    <fieldset className="profile__fields">
                        <div className="profile__container">
                            <p className="profile__form-input-name">Имя</p>
                            <input placeholder="Имя" type="text" name="name" className="profile__form-input" />
                        </div>
                        <hr className="profile__line" />
                        <div className="profile__container">
                            <p className="profile__form-input-name">E-mail</p>
                            <input className="profile__form-input" placeholder="email@email.ru"/>
                        </div>
                    </fieldset>

                    <span className='profile__message'>При обновлении профиля произошла ошибка.</span>
                    <button className="profile__button profile__button_type_edit" >Редактировать</button>
                </form>
                <button className="profile__button profile__button_type_signout">
                    <Link className="profile__button profile__button_type_signout" to="/signin" >Выйти из аккаунта </Link>
                </button>
            </section>

        </>
    )
}