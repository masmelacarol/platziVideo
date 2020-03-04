import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getVideoSource} from '../actions';
import NotFound from '../containers/NotFound';
import '../assets/styles/components/Player.scss';

const Player = props => {
    const {id} = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0;
    useEffect(() => {
        props.getVideoSource(id);
    }, [])

    return  hasPlaying ? (
        <div className="player">
            <video className="player__video" controls autoPlay>
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="player__back">
                <button 
                    className="player__back--button" 
                    type="button" 
                    onClick={()=> props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    ): <NotFound></NotFound>;
};

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
};

const mapDispatchToProps = {
    getVideoSource
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);