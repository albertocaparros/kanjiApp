import { LOAD_KANJI, SET_LOADING, SET_ID } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOAD_KANJI:
      return {
        ...state,
        currentKanji: action.payload,
        loading: false
      };
    case SET_ID:
      return {
        ...state,
        id: action.payload
      };
    default:
      return state;
  }
};
