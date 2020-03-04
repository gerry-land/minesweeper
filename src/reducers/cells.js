import { CREATE_CELLS, UPDATE_CELLS} from '../actions';

export function cells(state = {cells: []}, action) {
  switch (action.type) {
    case CREATE_CELLS: {
      return {
        cells: action.cells
      }
    }
    case UPDATE_CELLS: {
      return {
        cells: action.cells
      }
    }
    default: {
      return state
    }
  }
}