import React from 'react';
import Strokes from './Strokes';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const CardItem = ({ id, kanji, loading }) => {
  let videoRef = React.createRef();

  function playVideo() {
    videoRef.current.play();
  }

  function pauseVideo() {
    videoRef.current.pause();
  }

  if (loading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div className='card text-center'>
        <div className='grid-2'>
          <div>
            <h4>Kanji number: {id}</h4>
            <video width='220' poster={kanji.video.poster} ref={videoRef}>
              <source src={kanji.video.webm} type='video/webm'></source>
            </video>
            <div className='row'>
              <i className='fas fa-pause m' onClick={pauseVideo}></i>
              <i className='fas fa-play m' onClick={playVideo}></i>
            </div>
            <div className='text-left lead'>
              <p>
                <strong>Strokes:</strong>
              </p>
            </div>
            <div className='row'>
              {kanji.strokes.images.map(stroke => (
                <Strokes
                  key={stroke[stroke.length - 5]}
                  stroke={stroke}
                ></Strokes>
              ))}
            </div>
          </div>
          <div className='text-left lead'>
            <p>
              <strong>Meaning: </strong>
              {kanji.meaning.english}
            </p>
          </div>
          <div className='text-left lead'>
            <p>
              <strong>Story: </strong>
            </p>
            <textarea></textarea>
          </div>
        </div>
      </div>
    );
  }
};

CardItem.propTypes = {
  id: PropTypes.number.isRequired,
  kanji: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};
export default CardItem;
