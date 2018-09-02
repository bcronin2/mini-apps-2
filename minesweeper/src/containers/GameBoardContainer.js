import { connect } from 'react-redux';
import GameBoard from '../components/GameBoard';
import { clickCell, flagCell, startNewGame } from '../redux/actions';

const mapStateToProps = state => {
  const { board, lost } = state.game;
  return { board, lost };
};

const mapDispatchToProps = dispatch => ({
  clickCell: (row, col) => {
    dispatch(clickCell(row, col));
  },
  flagCell: (row, col) => {
    dispatch(flagCell(row, col));
  },
  startNewGame: () => {
    dispatch(startNewGame());
  }
});

const GameBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);

export default GameBoardContainer;
