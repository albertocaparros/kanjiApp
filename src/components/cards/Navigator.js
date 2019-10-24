import React, { useContext, useEffect } from 'react';
import KanjiContext from '../../context/kanji/kanjiContext';

const Navigator = () => {
  const kanjiContext = useContext(KanjiContext);

  const { id, studyMode } = kanjiContext;

  useEffect(() => {
    kanjiContext.loadKanji();
  }, [id]);

  const previousKanji = () => {
    kanjiContext.setID(id - 1);
  };

  const nextKanji = () => {
    kanjiContext.setID(id + 1);
  };

  const setMode = mode => {
    kanjiContext.setStudyMode(mode);
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
            <button
              className={`${studyMode === 'full' ? 'active' : ''}`}
              onClick={() => setMode('full')}
            >
              Full
            </button>
            <button
              className={`${studyMode === 'kanji' ? 'active' : ''}`}
              onClick={() => setMode('kanji')}
            >
              Kanji
            </button>
            <button
              className={`${studyMode === 'meaning' ? 'active' : ''}`}
              onClick={() => setMode('meaning')}
            >
              Meaning
            </button>
            <button
              className={`${studyMode === 'story' ? 'active' : ''}`}
              onClick={() => setMode('story')}
            >
              Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
