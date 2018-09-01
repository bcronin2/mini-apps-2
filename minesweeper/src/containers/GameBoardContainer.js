import GameBoard from '../components/GameBoard.js';
import { connect } from 'react-redux';
import { clickCell } from '../redux/actions.js';

const mapStateToProps = state => {
  return { gameBoard: state.gameBoard };
};

const mapDispatchToProps = dispatch => {
  return {
    clickCell: (row, col) => {
      dispatch(clickCell(row, col));
    }
  };
};

const GameBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);

export default GameBoardContainer;
