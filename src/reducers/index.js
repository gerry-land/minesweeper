import { combineReducers } from 'redux'
import { gameMode } from './gameMode';
import { cells } from './cells';
import { minesLeft } from './minesLeft'

export const reducers = combineReducers({
  gameMode,
  cells,
  minesLeft
});