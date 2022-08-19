import React from 'react'
import Card from './Card'
import { v4 as uuidv4 } from 'uuid';

function MainContainer(props){

	const array = [];
	const countries = ['al', 'ag', 'bi', 'fm', 'kn', 'vc', 'sc', 'sz', 'ls', 'mg', 'gl', 'dj'];

	for(let i=0;i<12;i++){
		array.push(<Card title={i} code={countries[i]} key={uuidv4()}/>)
	}

	return(
		<div id='card-container'>
			{array.map((item)=>{
				return item
			})}
		</div>
	)
}

export default MainContainer