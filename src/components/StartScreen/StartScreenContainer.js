import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { StartScreen } from './StartScreen';
import { setGameMode, updateCells, updateMinesLeft } from '../../actions'

const mapStateToProps = state => ({
  gameMode: state.gameMode
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
      dispatch(updateMinesLeft(mines));
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScreen))