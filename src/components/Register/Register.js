import React, { useState } from "react";
import './Register.css';
import header__logo from "../../images/header__logo.svg";
import { Link, useNavigate } from 'react-router-dom';
import api from '../../utils/MainApi';


export function Register({ handleLogin }) {

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
        const { name, password, email } = formValue;
        api.register(name, password, email).then((res) => {
            api.authorize(formValue.password, formValue.email)
                .then((data) => {
                    if (data.token) {
                        setFormValue({ email: '', password: '' });
                        handleLogin();
                        navigate('/movies', { replace: true });
                    }
                })
        }
        )
            .catch((res) => {
                setErrors({ ...errors, server: res });
            });

    }

    return (

        <section className='register'>
            <div className='auth__container'>
                <div className="auth__logo-container">
                    <Link to="/">
                        <img src={header__logo} className="auth__logo" alt="Лого" />
                    </Link>
                </div>
                <h2 className='auth__title'>Добро пожаловать!</h2>
                <form className='auth__form' onSubmit={handleSubmit}>
                    <fieldset className='auth__fields'>
                        <p className='auth__input-name'>Имя</p>
                        <input className='auth__input' value={formValue.name} onChange={handleChange}
                            name="name" pattern="[а-яА-Яa-zA-ZёË\- ]{1,}" placeholder='Имя' required minLength={2} maxLength={40} />
                        <span className='auth__error'>{errors.name}</span>
                        <p className='auth__input-name'>E-mail</p>
                        <input className='auth__input' value={formValue.email} onChange={handleChange}
                            name="email" placeholder='Email' required minLength={2} maxLength={40}
                            pattern="[0-9a-zA-Z\- ]{1,}@[0-9a-zA-Z\- ]{1,}.{1,1}[a-zA-Z\- ]{2,3}"

                        />
                        <span className='auth__error'>{errors.email}</span>
                        <p className='auth__input-name'>Пароль</p>
                        <input className="auth__input" type="password" value={formValue.password} onChange={handleChange}
                            name="password" placeholder='Пароль' required minLength={2} maxLength={200} />
                        <span className='auth__error'>{errors.password}</span>
                        <span className='auth__submit-error'>{errors.server}</span>
                    </fieldset>
                    <button className={isValid ? "auth__button" : 'auth__button auth__button_disabled'}>Зарегистрироваться</button>
                </form>
                <h3 className='auth__caption'>Уже зарегистрированы?
                    <Link className='auth__link' to="/" >Войти</Link></h3>
            </div>


        </section>
    )
}