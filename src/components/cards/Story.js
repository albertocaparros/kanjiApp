import React, { useContext, Fragment } from 'react';
import KanjiContext from '../../context/kanji/kanjiContext';

const Story = () => {
  const kanjiContext = useContext(KanjiContext);

  const { currentKanji } = kanjiContext;

  return (
    <Fragment>
      <div className='text-left lead'>
        <strong>Story: </strong>
        <textarea></textarea>
      </div>
    </Fragment>
  );
};

export default Story;
