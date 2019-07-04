import * as actionTypes from './actions';

const initialState = {
  when: `${new Date().toLocaleDateString('en-US', { year: 'numeric' })}-${new Date().toLocaleDateString('en-US', { month: '2-digit' })}-${new Date().toLocaleDateString('en-US', { day: '2-digit' })}`,
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