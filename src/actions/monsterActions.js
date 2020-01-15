import * as types from '../constants/actionTypes';

export function changeGamePhase(value) {
  return {
    type: types.CHANGE_GAME_PHASE,
    value
  };
}