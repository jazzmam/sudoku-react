import React, { useEffect } from 'react';
import '../App.css';
import Square from './Square';

function App() {

	

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
