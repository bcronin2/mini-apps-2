import { connect } from 'react-redux';
import GameBoard from '../components/GameBoard';

const mapStateToProps = state => {
  return { gameBoard: state.gameBoard };
};

const GameBoardContainer = connect(
  mapStateToProps,
  null
)(GameBoard);

export default GameBoardContainer;
