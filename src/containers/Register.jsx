import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Register.scss'

const Register = () => (
    <section className="register">
        <section className="register__container">
            <h2>Regístrate</h2>
            <form className="register__container--form">
                <input type="text" className="input form" placeholder="Nombre"/>
                <input type="email" className="input form" placeholder="Correo"/>
                <input type="password" className="input form" placeholder="Password"/>
                <button className="button">Regístrame</button>
            </form>
            <Link to="/login">Iniciar Sesión</Link>
        </section>
    </section>
);

export default Register;