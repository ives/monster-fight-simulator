import {CHANGE_GAME_PHASE} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function fuelSavingsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_GAME_PHASE:
      return objectAssign({}, state, {gamePhase: action.value});

    default:
      return state;
  }
}
