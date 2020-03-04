import { connect } from 'react-redux';
import { Game } from './Game';
import { setGameMode, updateCells, updateMinesLeft } from '../../actions'
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  gameMode: state.gameMode,
  cells: state.cells,
  minesLeft: state.minesLeft
})

const mapDispatchToProps = dispatch => {
  return {
    setGameMode: mode => {
      dispatch(setGameMode(mode));
    },
    updateCells: cells => {
      dispatch(updateCells(cells));
    },
    updateMinesLeft: mines => {
      dispatch(updateMinesLeft(mines))
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Game));