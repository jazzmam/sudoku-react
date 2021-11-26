import React, { useEffect } from 'react';
import '../App.css';
import Square from './Square';

function App() {

	type SquareType = {
		digit: number;
		index: number;
		shown: boolean;
	}

	let row: Array<SquareType> = [];
	let previuosRows: Array<SquareType> = [];
	let sudoku: Array<SquareType> = [];
	const possibleOptionsForDigit = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	function generateRandomArrayIndex(unusedDigits: Array<number> ) {
		return Math.floor(Math.random() * unusedDigits.length);
	}

	function unusedDigitInRowAndColumn( sudoku: Array<SquareType>, row: Array<SquareType>, columnIndex: number ) {
		let digitsExistingInRow: Array<number> = [];
		let digitsExistingInColumn: Array<number> = [];
		let unusedDigitsInRow: Array<number> = [];
		let unusedDigitsInColumn: Array<number> = [];
		let unusedDigits: Array<number>;
		let randomDigitFromUnused: number;
		
		digitsExistingInRow = row.map(square => square.digit);
		unusedDigitsInRow = possibleOptionsForDigit.filter(digit => !digitsExistingInRow.includes(digit));
	
		digitsExistingInColumn = sudoku.filter(square => square.index === columnIndex).map(square => square.digit);
		unusedDigitsInColumn = possibleOptionsForDigit.filter(digit => !digitsExistingInColumn.includes(digit));
	
		unusedDigits = unusedDigitsInRow.filter(digit => unusedDigitsInColumn.includes(digit));	
		randomDigitFromUnused = unusedDigits[generateRandomArrayIndex(unusedDigits)];
	
		return randomDigitFromUnused;
	}

	function createSudokValues() {
		for ( let y = 1; y <= 9; y++ ) {
			for ( let columnIndex = 1; columnIndex <= 9; columnIndex++ ) {
				while (row.length <= 9) {
						row.push(
							{
								digit: unusedDigitInRowAndColumn(sudoku, row, columnIndex),
								index: columnIndex,
								shown: true
							}
						);
						break;
				}
			}
			previuosRows = [ ...sudoku];
			sudoku = [ ...previuosRows, ...row ];
			row = [];
		}
		return sudoku;
	}

	useEffect(() => {

	  }, []);

	return (
		<div className="App">
			<div className="pageContainer">
				<p>
					Sudoku
				</p>
				<div className="sudokuContainer">
					<Square></Square>
					<Square></Square>
					<Square></Square>
					<Square></Square>
					<Square></Square>
					<Square></Square>
					<Square></Square>
					<Square></Square>
					<Square></Square>
					<Square></Square>
				</div>
			</div>
		</div>
	);
}

export default App;
