import { connect } from 'react-redux';
import GameCell from '../components/GameCell';
import { clickCell } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  clickCell: (row, col) => {
    dispatch(clickCell(row, col));
  }
});

const GameCellContainer = connect(
  null,
  mapDispatchToProps
)(GameCell);

export default GameCellContainer;
