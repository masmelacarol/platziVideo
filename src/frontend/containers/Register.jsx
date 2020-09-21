import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/login');
    props.history.push('/');
  };
  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input name='name' type='text' className='input form' placeholder='Nombre' onChange={handleInput} />
          <input name='email' type='email' className='input form' placeholder='Correo' onChange={handleInput} />
          <input name='password' type='password' className='input form' placeholder='Password' onChange={handleInput} />
          <button type='submit' className='button'>
            Regístrame
          </button>
        </form>
        <Link to='/login'>Iniciar Sesión</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
