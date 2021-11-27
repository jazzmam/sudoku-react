import '../App.css';
import { SquareType } from '../interfaces/customInterfaces';

const Square = (square: SquareType) => {
  return (
    <div className="sudokuSquare">
      {square.digit}
		</div>
  );
}

export default Square;
