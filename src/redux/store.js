import {createStore} from 'redux';
import {default as game, initialState} from './gameReducer';
const store = createStore(game,initialState);

export default store;