import React, { useContext, Fragment } from 'react';
import KanjiContext from '../../context/kanji/kanjiContext';

const Meaning = () => {
  const kanjiContext = useContext(KanjiContext);

  const { currentKanji } = kanjiContext;

  return (
    <Fragment>
      <div className='text-left lead'>
        <p>
          <strong>Meaning: </strong>
          {currentKanji.meaning.english}
        </p>
      </div>
    </Fragment>
  );
};

export default Meaning;
