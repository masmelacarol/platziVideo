import React from 'react';
import '../assets/styles/components/Search.scss'


const Search = () => (
    <section className="main">
        <h2 className="main__title">¿Qué quieres a ver hoy?</h2>
        <input className="input" type="text" placeholder="Buscar..." name="search"/>
    </section>
);

export default Search;