import React from "react";
import './Register.css';
import header__logo from "../../images/header__logo.svg";
import { Link } from "react-router-dom";


export function Register() {

    const [isValid, setIsValid] = React.useState(true);

    return (

        <section className='register'>
            <div className='auth__container'>
                <div className="auth__logo-container">
                    <img src={header__logo} className="auth__logo" alt="Лого" />
                </div>
                <h2 className='auth__title'>Добро пожаловать!</h2>
                <form className='auth__form'>
                    <fieldset className='auth__fields'>
                        <p className='auth__input-name'>Имя</p>
                        <input className='auth__input' />
                        <p className='auth__input-name'>E-mail</p>
                        <input className='auth__input' />
                        <p className='auth__input-name'>Пароль</p>
                        <input className="auth__input" type="password" />
                        <span className='auth__error'>Что-то пошло не так...</span>
                    </fieldset>
                    <button className={isValid ? "auth__button" : 'auth__button auth__button_disabled'}>Зарегистрироваться</button>
                </form>
                <h3 className='auth__caption'>Уже зарегистрированы?
                    <Link className='auth__link' to="/signin" >Войти</Link></h3>
            </div>


        </section>
    )
}