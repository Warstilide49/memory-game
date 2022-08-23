import React from 'react';

function ScoreBoard(props){
	return(
		<div id='scoreboard'>
			<div className='score'>
				<h3 className='underline'>Current</h3>
				<p>{props.current}</p>
			</div>
			<div className='score'>
				<h3 className='underline'>Best</h3>
				<p>{props.best}</p>
			</div>
		</div>
	)
}

export default ScoreBoard;