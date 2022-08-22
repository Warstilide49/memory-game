import React from 'react';
import ScoreBoard from './main_contents/ScoreBoard'
import MainContainer from './main_contents/MainContainer'
import {useState, useEffect} from 'react'
import '../styles/contents.css'

function Content(props){

	const [currentScore, setCurrent] = useState(0);
	const [bestScore, setBest] = useState(0);
	const {setModal} = props;

	useEffect(()=>{
		if (currentScore===12)
			setModal(true)
	}, [currentScore, setModal]);

	return(
		<div id='content'>
			<ScoreBoard current={currentScore} best={bestScore}/>
			<MainContainer current={currentScore} best={bestScore} setCurrent={setCurrent} setBest={setBest}/>
		</div>
	)
}

export default Content