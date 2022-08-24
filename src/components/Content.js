import React from 'react';
import ScoreBoard from './main_contents/ScoreBoard'
import MainContainer from './main_contents/MainContainer'
import {useState, useEffect} from 'react'
import '../styles/contents.css'

function Content(props){

	const [currentScore, setCurrent] = useState(0);
	const [bestScore, setBest] = useState(0);
	const {setModal, setMessage} = props;

	useEffect(()=>{
		if (currentScore===12){
			setModal(true)
			setMessage("Congrats, you've won!")
		}
	}, [currentScore, setModal, setMessage]);

	const infoListener = () =>{
		setModal(true); 
		setMessage('Avoid clicking on the same card twice!');
	}

	return(
		<div id='content'>
			<p id='info' className='underline' onClick={infoListener}> ℹ️ How to play?</p>
			<ScoreBoard current={currentScore} best={bestScore}/>
			<MainContainer current={currentScore} best={bestScore} setCurrent={setCurrent} setBest={setBest}/>
		</div>
	)
}

export default Content