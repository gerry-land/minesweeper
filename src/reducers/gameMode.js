import { SET_GAME_MODE } from '../actions'

const initialState = {
  selected: 'easy',
  modes: {
    easy: {
      columns: 10,
      rows: 10,
      mines: 10
    },

    normal: { 
      columns: 16,
      rows: 16,
      mines: 40
    },
    hard: { 
      columns: 32,
      rows: 16,
      mines: 99
    }
  }
}

export function gameMode(state = initialState, action) {
  switch (action.type) {
    case SET_GAME_MODE: {
      return Object.assign({}, state, {selected: action.mode});
    }
    default: {
      return state
    }
  }
}