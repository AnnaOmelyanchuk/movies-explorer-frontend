import React, { useState } from "react";
import './Login.css';
import header__logo from "../../images/header__logo.svg";
import { Link, useNavigate } from 'react-router-dom';
import api from '../../utils/MainApi';

export function Login({ handleLogin }) {

    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(true);
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
        setErrors({ ...errors, [name]: e.target.validationMessage });
        setIsValid(e.target.closest("form").checkValidity());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        api.authorize(formValue.password, formValue.email)
            .then((data) => {
                if (data.token) {
                    setFormValue({ email: '', password: '' });
                    handleLogin();
                    navigate('/movies', { replace: true });
                }
            })
            .catch((res) => {
                setErrors({ ...errors, server: res });
            });
    }

    return (
        <section className='register'>

            <div className='auth__container'>
                <div className="auth__logo-container">
                    <img src={header__logo} className="auth__logo" alt="Лого" />
                </div>
                <h2 className="auth__title">Рады видеть!</h2>
                <form className='auth__form' onSubmit={handleSubmit}>
                    <fieldset className='auth__fields'>
                        <p className='auth__input-name'>E-mail</p>
                        <input className='auth__input'
                            placeholder="email@email.ru"
                            name='email'
                            type='email'
                            value={formValue.email}
                            onChange={handleChange}
                            required />
                        <span className='auth__error'>{errors.email}</span>
                        <p className='auth__input-name'>Пароль</p>
                        <input placeholder="пароль"
                            type="password"
                            className="auth__input"
                            name="password"
                            value={formValue.password}
                            onChange={handleChange}
                            minLength="2"
                            required />
                        <span className='auth__error'>{errors.password}</span>
                    </fieldset>
                    <span className='auth__submit-error'>{errors.server}</span>
                    <button className={isValid ? "auth__button" : 'auth__button auth__button_disabled'} type='submit'>Войти</button>
                </form>
                <h3 className='auth__caption'>Ещё не зарегистрированы?
                    <Link className='auth__link' to="/signup">Регистрация</Link></h3>
            </div>

        </section>
    )
}
