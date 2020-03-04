import { connect } from 'react-redux';
import { MinesLeft } from './MinesLeft';

const mapStateToProps = state => ({
  minesLeft: state.minesLeft
})

export default connect(
  mapStateToProps
)(MinesLeft);