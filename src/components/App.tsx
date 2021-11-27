import React, { useEffect, useState } from 'react';
import '../App.css';
import { SquareType } from '../interfaces/customInterfaces';
import Square from './Square';

function App() {
	let row: Array<SquareType> = [];
	const [sudoku, setSudoku] = useState<SquareType[]>([]);
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
		let generatedUnusedDigit: number = 0;

		for ( let y = 1; y <= 9; y++ ) {
			for ( let columnIndex = 1; columnIndex <= 9; columnIndex++ ) {
				while (row.length <= 9) {
					console.log('row ', row)
					generatedUnusedDigit = unusedDigitInRowAndColumn(sudoku, row, columnIndex);
					row.push(
						{
							digit: generatedUnusedDigit,
							index: columnIndex,
							shown: true
						}
					);
					break;
				}
				
			}
			// end of inner loop

            // eslint-disable-next-line no-loop-func
            setSudoku(prevSquares => [ ...prevSquares, ...row]);
			row = [];
			// end of outer loop
		}
	}

	useEffect(() => {
		console.log('sudoku ', sudoku)
	});

	useEffect(() => {
		createSudokValues();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="App">
			<div className="pageContainer">
				<p>
					Sudoku
				</p>
				<div className="sudokuContainer">
					{
						sudoku.map((square, idx) =>
						<Square key={idx} {...square}></Square>
						)
					}
				</div>
			</div>
		</div>
	);
}

export default App;
