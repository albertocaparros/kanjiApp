import React, { useContext, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import KanjiContext from '../../context/kanji/kanjiContext';
import KanjiItem from './KanjiItem';
import Meaning from './Meaning';
import Story from './Story';

const CardItem = () => {
  const kanjiContext = useContext(KanjiContext);

  const { id, loading, studyMode } = kanjiContext;

  if (loading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <div className='card text-center'>
        <div className='grid-2'>
          <h4>Kanji number: {id}</h4>
          {studyMode === 'full' || studyMode === 'kanji' ? (
            <KanjiItem></KanjiItem>
          ) : (
            <Fragment></Fragment>
          )}
          {studyMode === 'full' || studyMode === 'meaning' ? (
            <Meaning></Meaning>
          ) : (
            <Fragment></Fragment>
          )}
          {studyMode === 'full' || studyMode === 'story' ? (
            <Story></Story>
          ) : (
            <Fragment></Fragment>
          )}
        </div>
        <div className='grid-2'></div>
      </div>
    );
  }
};

export default CardItem;
