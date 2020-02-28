import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Login.scss'
import googleIcon from '../assets/static/logo-google.png'
import twitterIcon from '../assets/static/logo-twitter.png'

const Login = () => (
    <section className="login">
        <section className="login__container">
            <h2>Inicia Sesión</h2>
            <form className="login__container--form">
                <input type="text" className="input form" placeholder="Correo"/>
                <input type="password" className="input form" placeholder="Contraseña"/>
                <button className="button">Iniciar Sesión</button>
                <div className="login__container--remember-me">
                    <label>
                        <input type="checkbox" name="" id="remember" value="check"/> Recuérdame
                    </label>
                    <a href="/">Olvidé mi contraseña</a>
                </div>
            </form>
            <section className="login__container--social-media">
                <div><img src={googleIcon} className="icon" alt="Logo de Google"/> Inicia sesión con Google</div>
                <div><img src={twitterIcon} className="icon" alt="Logo de Twitter"/> Inicia sesión con Twitter</div>
            </section>
            <p className="login__container--register">No tienes ninguna cuenta 
                <Link to="/register">Registrate</Link></p>
        </section>
    </section>
);

export default Login;