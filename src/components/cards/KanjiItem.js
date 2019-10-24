import React, { useContext, Fragment } from 'react';
import KanjiContext from '../../context/kanji/kanjiContext';
import Strokes from './Strokes';

const KanjiItem = () => {
  const kanjiContext = useContext(KanjiContext);

  const { currentKanji } = kanjiContext;

  let videoRef = React.createRef();

  function playVideo() {
    videoRef.current.play();
  }

  function pauseVideo() {
    videoRef.current.pause();
  }

  return (
    <Fragment>
      <video
        width='220'
        poster={currentKanji.video.poster}
        ref={videoRef}
        onClick={playVideo}
        className='all-center'
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
        <div className='row'>
          {currentKanji.strokes.images.map(stroke => (
            <Strokes key={stroke[stroke.length - 5]} stroke={stroke}></Strokes>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default KanjiItem;
