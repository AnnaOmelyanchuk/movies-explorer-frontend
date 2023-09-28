import React from "react";
import './Login.css';
import header__logo from "../../images/header__logo.svg";
import { Link } from "react-router-dom";


export function Login() {

    const [isValid, setIsValid] = React.useState(false);

    return (
        <section className='register'>

            <div className='auth__container'>
                <div className="auth__logo-container">
                    <img src={header__logo} className="auth__logo" alt="Лого" />
                </div>
                <h2 className="auth__title">Рады видеть!</h2>
                <form className='auth__form'>
                    <fieldset className='auth__fields'>
                        <p className='auth__input-name'>E-mail</p>
                        <input className='auth__input' placeholder="email@email.ru" name='email' type='email' />
                        <p className='auth__input-name'>Пароль</p>
                        <input placeholder="пароль" type="password" className="auth__input" name="password" />
                    </fieldset>
                    <span className='auth__submit-error'>sss</span>
                    <button className={isValid ? "auth__button" : 'auth__button auth__button_disabled'} type='submit'>Войти</button>
                </form>
                <h3 className='auth__caption'>Ещё не зарегистрированы?
                    <Link className='auth__link' to="/signup">Регистрация</Link></h3>
            </div>

        </section>
    )
}
