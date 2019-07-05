import moment from 'moment';

import * as actionTypes from './actions';

const initialState = {
  when: `${moment().format('YYYY')}-${moment().format('MM')}-${moment().format('DD')}`,
  gigs: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_WHEN:
      return {
        ...state,
        when: action.payload
      }
    case actionTypes.SET_WHERE:
      return {
        ...state,
        where: action.payload
      }
    case actionTypes.SET_GIGS:
      return {
        ...state,
        gigs: action.payload
      }
    case actionTypes.SET_SPOTIFY_TOKEN:
      return {
        ...state,
        spotifyToken: action.payload
      }
    default:
      return state;
  }
}

export default reducer;