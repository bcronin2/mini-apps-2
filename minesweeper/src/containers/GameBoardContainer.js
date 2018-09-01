import GameBoard from '../components/GameBoard.js';
import { connect } from 'react-redux';
import { updateGameBoard } from '../redux/actions.js';

const mapStateToProps = state => {
  return { gameBoard: state.gameBoard };
};

const mapDispatchToProps = dispatch => {
  return {
    updateGameBoard: board => {
      dispatch(updateGameBoard(board));
    }
  };
};

const GameBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);

export default GameBoardContainer;
