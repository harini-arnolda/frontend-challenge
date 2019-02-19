import {combineReducers} from 'redux';
import champions from './ChampionReducer'

const rootReducer = combineReducers({
    champions
});

export default rootReducer;
