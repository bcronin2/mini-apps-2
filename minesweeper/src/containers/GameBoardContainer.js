import { connect } from 'react-redux';
import GameBoard from '../components/GameBoard';
import { clickCell, startNewGame } from '../redux/actions';

const mapStateToProps = state => {
  const { board, lost } = state.gameplay;
  return { board, lost };
};

const mapDispatchToProps = dispatch => ({
  clickCell: (row, col) => {
    dispatch(clickCell(row, col));
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
