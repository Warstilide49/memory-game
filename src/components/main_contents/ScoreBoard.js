import React from 'react';

function ScoreBoard(props){
	return(
		<div id='scoreboard'>
			<div id='currentScore'>Current_Score: {props.current}</div>
			<div id='bestScore'>Best_Score: {props.best}</div>
		</div>
	)
}

export default ScoreBoard;