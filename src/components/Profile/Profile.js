import React, { useState } from "react";
import './Profile.css';
import { Header } from "../Header/Header";
import { Link } from "react-router-dom";
import api from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

export function Profile({ setCurrentUser, handleLogOut, loggedIn}) {

    const currentUser = React.useContext(CurrentUserContext);
    const [errors, setErrors] = React.useState({});
    const [formValue, setFormValue] = useState({
        name: currentUser.name,
        email: currentUser.email
    })

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
        setErrors({ ...errors, [name]: e.target.validationMessage });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        api.setUserInfo(formValue.name, formValue.email)
            .then((data) => {

                if (data) {
                    setCurrentUser({
                        name: data.name,
                        email: data.email
                    })
                    setFormValue({ email: data.email, name: data.name });
                }
            })
            .catch((res) => {
                setErrors({ ...errors, server: res });
            });
    }

    return (
        <>
            <Header loggedIn={loggedIn} />
            <section className="profile">
                <h2 className="profile__title">Привет, {currentUser.name}!</h2>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <fieldset className="profile__fields">
                        <div className="profile__container">
                            <p className="profile__form-input-name">Имя</p>
                            <input placeholder="Имя" type="text"
                                name="name"
                                className="profile__form-input"
                                value={formValue.name}
                                onChange={handleChange}
                                pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                                minLength={2}
                                maxLength={40} />
                        </div>
                        <span className='auth__error'>{errors.name}</span>
                        <hr className="profile__line" />
                        <div className="profile__container">
                            <p className="profile__form-input-name">E-mail</p>
                            <input className="profile__form-input" placeholder="email@email.ru"
                                name='email'
                                type='email'
                                value={formValue.email}
                                onChange={handleChange}
                            />
                        </div>
                        <span className='auth__error'>{errors.email}</span>
                    </fieldset>
                    <span className='profile__message'>{errors.server}</span>
                    <button className="profile__button profile__button_type_edit"
                        disabled={(currentUser.name === formValue.name) && currentUser.email === formValue.email ? "disabled" : ''}>Редактировать</button>
                </form>
                <button className="profile__button profile__button_type_signout">
                    <Link className="profile__button profile__button_type_signout" onClick={handleLogOut}
                    to="/signin" >Выйти из аккаунта </Link>
                </button>
            </section>

        </>
    )
}