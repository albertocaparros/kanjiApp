import React, { useContext, useEffect } from 'react';
import KanjiContext from '../../context/kanji/kanjiContext';

const Navigator = () => {
  const kanjiContext = useContext(KanjiContext);

  const { id } = kanjiContext;

  useEffect(() => {
    kanjiContext.loadKanji();
  }, [id]);

  const previousKanji = () => {
    kanjiContext.setID(id - 1);
  };

  const nextKanji = () => {
    kanjiContext.setID(id + 1);
  };

  return (
    <div>
      <div className='row'>
        {id !== 1 ? (
          <i className='fas fa-chevron-left m lead' onClick={previousKanji}></i>
        ) : (
          <p></p>
        )}

        <input
          type='number'
          id='idCounter'
          name='kanjiId'
          min='0'
          max='10'
          value={id}
          readOnly
        />
        <i className='fas fa-chevron-right  m lead' onClick={nextKanji}></i>
      </div>
      <div className='row'>
        <p>
          <strong>Study mode</strong>
        </p>
        <div>
          <div className='btn-group'>
            <button>Full</button>
            <button>Kanji</button>
            <button>Meaning</button>
            <button>Story</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
