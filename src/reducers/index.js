import { combineReducers } from 'redux';
import monsterFighter from './monsterReducer';

const rootReducer = history => combineReducers({
  monsterFighter
});

export default rootReducer;
