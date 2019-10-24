import React, { useReducer } from 'react';
import axios from 'axios';
import KanjiContext from './kanjiContext';
import KanjiReducer from './kanjiReducer';
import { LOAD_KANJI, SET_LOADING, SET_ID, SET_STUDYMODE } from '../types';

const KanjiState = props => {
  const heisigList = [
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十'
  ];

  const initialState = {
    id: 1,
    currentKanji: {
      character: '',
      kunyomi: {},
      meaning: {},
      onyomi: {},
      strokes: { images: [] },
      video: {}
    },
    loading: false,
    studyMode: 'full'
  };

  const [state, dispatch] = useReducer(KanjiReducer, initialState);

  //Load Kanji
  const loadKanji = async () => {
    setLoading();

    const res = await axios({
      method: 'GET',
      url:
        'https://kanjialive-api.p.rapidapi.com/api/public/kanji/' +
        heisigList[state.id - 1],
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
      }
    });

    dispatch({ type: LOAD_KANJI, payload: res.data.kanji });
  };

  //Set ID
  const setID = newID => {
    dispatch({ type: SET_ID, payload: newID });
  };

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  //Set Study Mode
  const setStudyMode = newMode =>
    dispatch({ type: SET_STUDYMODE, payload: newMode });

  return (
    <KanjiContext.Provider
      value={{
        id: state.id,
        currentKanji: state.currentKanji,
        loading: state.loading,
        studyMode: state.studyMode,
        loadKanji,
        setID,
        setStudyMode
      }}
    >
      {props.children}
    </KanjiContext.Provider>
  );
};

export default KanjiState;
