import { connect } from 'react-redux';
import GameBoard from '../components/GameBoard';
import { clickCell } from '../redux/actions';

const mapStateToProps = state => {
  return { gameBoard: state.gameBoard };
};

const mapDispatchToProps = dispatch => ({
  clickCell: (row, col) => {
    dispatch(clickCell(row, col));
  }
});

const GameBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);

export default GameBoardContainer;
