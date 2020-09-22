import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { dropFavorite, postFavorite } from '../actions';
import playIcon from '../assets/static/play.png';
import plusIcon from '../assets/static/plus.png';
import removeIcon from '../assets/static/remove-icon.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = (props) => {
  const { mylist, id, title, year, contentRating, duration, cover, isList, _id, user } = props;
  const handleSetFavorite = () => {
    const videoExist = mylist.find((itemId) => itemId.id === id);
    if (!videoExist) {
      const movie = {
        id,
        title,
        year,
        contentRating,
        duration,
        cover,
        _id,
      };
      const userId = user.id;
      props.postFavorite(userId, _id, movie);
    }
  };
  const handleDeleteFavorite = (itemId) => {
    props.dropFavorite(_id, itemId);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item_details'>
        <div>
          <Link to={`/player/${id}`}>
            <img src={playIcon} alt='Play' />
          </Link>

          {!isList ? (
            <img src={plusIcon} alt='Plus' onClick={handleSetFavorite} />
          ) : (
            <img src={removeIcon} alt='Remove' onClick={() => handleDeleteFavorite(id)} />
          )}
        </div>
        <p className='carousel-item_details--title'>{title}</p>
        <p className='carousel-item_details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  year: PropTypes.number,
  cover: PropTypes.string,
};

const mapDispatchToProps = {
  postFavorite,
  dropFavorite,
};
const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);
