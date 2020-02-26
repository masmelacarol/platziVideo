import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/play.png'
import plusIcon from '../assets/static/plus.png'

const CarouselItem = ({title, year, contentRating, duration, cover}) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}/>
        <div className="carousel-item_details">
            <div>
                <img src={playIcon} alt="Play"/>
                <img src={plusIcon} alt="Plus"/>
            </div>
            <p className="carousel-item_details--title">{title}</p>
            <p className="carousel-item_details--subtitle">
                {`${year} ${contentRating} ${duration}`}
            </p>
        </div>
    </div>
);

CarouselItem.propTypes = {
    title: PropTypes.string,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
    year: PropTypes.number,
    cover: PropTypes.string,
    
}
export default CarouselItem;