export const UPDATE_CELLS = 'UPDATE_CELLS';
export const SET_GAME_MODE = 'SET_GAME_MODE';
export const CREATE_CELLS = 'CREATE_CELLS';
export const UPDATE_MINES_LEFT = 'UPDATE_MINES_LEFT';

export function setGameMode(mode) {
  return {
    type: SET_GAME_MODE,
    mode
  }
}

export function updateCells(cells) {
  return {
    type: CREATE_CELLS,
    cells
  }
}

export function updateMinesLeft(minesLeft) {
  return {
    type: UPDATE_MINES_LEFT,
    minesLeft
  }
}



