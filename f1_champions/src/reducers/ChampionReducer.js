import * as types from '../actions/actionTypes'
import initialState from './InitialState';

export default function ChampionReducer (state = initialState, action) {
      switch (action.type) {
        case types.FETCH_CHAMPIONS_SUCCESS:
            return {...state.champions, champions: action.champions}
        case types.FETCH_CHAMPIONS_OF_THE_YEAR_SUCCESS:
            return {...state, championsOfTheYear: action.championsOfTheYear}
        default:
          return state;
      }
};
