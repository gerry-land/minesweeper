import { UPDATE_MINES_LEFT } from '../actions'

const initialState = {
  minesLeft: 0,
}

export function minesLeft(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MINES_LEFT: {
      return Object.assign({}, state, {minesLeft: action.minesLeft});
    }
    default: {
      return state
    }
  }
}