import React, { useContext } from 'react';
import Strokes from './Strokes';
import Spinner from '../layout/Spinner';
import KanjiContext from '../../context/kanji/kanjiContext';

const CardItem = () => {
  const kanjiContext = useContext(KanjiContext);

  const { id, currentKanji, loading } = kanjiContext;

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
            <video
              width='220'
              poster={currentKanji.video.poster}
              ref={videoRef}
              onClick={playVideo}
            >
              <source src={currentKanji.video.webm} type='video/webm'></source>
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
              {currentKanji.strokes.images.map(stroke => (
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
              {currentKanji.meaning.english}
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

export default CardItem;
