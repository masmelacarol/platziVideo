import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setFavorite, deleteFavorite} from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play.png';
import plusIcon from '../assets/static/plus.png';
import removeIcon from '../assets/static/remove-icon.png';
import { Link } from 'react-router-dom';

const CarouselItem = (props) => {
    const {mylist, id, title, year, contentRating, duration, cover, isList} = props;
    const handleSetFavorite = () => {
        const videoExist = mylist.find(itemId => itemId.id === id);
        if(!videoExist) {
            props.setFavorite({
                    id, title, year, contentRating, duration, cover
                });
        }
    }
    const handleDeleteFavorite = (item) => {
        props.deleteFavorite(item);
    }
    return(
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title}/>
            <div className="carousel-item_details">
                <div>
                    <Link to={`/player/${id}`}>
                        <img src={playIcon} alt="Play"/>
                    </Link>                   
                    
                    {!isList 
                        ? <img src={plusIcon} alt="Plus" onClick={handleSetFavorite}/>
                        : <img src={removeIcon} alt="Remove" onClick={() => handleDeleteFavorite(id)}/>                        
                    }

                </div>
                <p className="carousel-item_details--title">{title}</p>
                <p className="carousel-item_details--subtitle">
                    {`${year} ${contentRating} ${duration}`}
                </p>
            </div>
        </div>
    );
}

CarouselItem.propTypes = {
    title: PropTypes.string,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
    year: PropTypes.number,
    cover: PropTypes.string,
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}
const mapStateToProps = (state) => {
    return {
        mylist: state.mylist
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);