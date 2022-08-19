import React from 'react';
import ScoreBoard from './main_contents/ScoreBoard'
import MainContainer from './main_contents/MainContainer'
import {useState} from 'react'
import '../styles/contents.css'

function Content(){

	const [currentScore, setCurrent] = useState(0);
	const [bestScore, setBest] = useState(0);

	return(
		<div id='content'>
			<ScoreBoard current={currentScore} best={bestScore}/>
			<MainContainer setCurrent={setCurrent} setBest={setBest}/>
		</div>
	)
}

export default Content