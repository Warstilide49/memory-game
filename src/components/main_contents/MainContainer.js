import React, {useState} from 'react'
import Card from './Card'
import { v4 as uuidv4 } from 'uuid';

function MainContainer(props){

	const [countries, setCountries]  = useState(['al', 'ag', 'bi', 'fm', 'kn', 'vc', 'sc', 'sz', 'ls', 'mg', 'gl', 'dj']);
	const [checkingArray, setCheckArray] = useState([]);

	const cardListener = (e, code) =>{
		setCountries(getShuffledArray(countries))
		const {best, current} = props;
		// add to checking array if not duplicate
		// increase score
		if (!presentInArray(code, checkingArray)){
			setCheckArray([...checkingArray, code])
			props.setCurrent(current + 1)
		}
		// if duplicate, update best score, reset checking score
		else{
			if(current>best)
				props.setBest(current);
			props.setCurrent(0);	
			setCheckArray([]);
		}
		
	}

	return(
		<div id='card-container'>
			{
			countries.map( (code) =>{
				return (<Card cardListener={cardListener} title={code} code={code} key={uuidv4()}/>)
			})
			}
		</div>
	)
}

function getShuffledArray(array){
	const new_array=[].concat(array);
	let random;

	for(let i=array.length-1 ; i>0; i--){
		random = Math.floor( Math.random() * i );
		[new_array[i], new_array[random] ] = [new_array[random], new_array[i]]
	}
	return new_array;
}

function presentInArray(element, array){
	for (let i=0; i<array.length; i++){
		if (element===array[i]){
			return true
		}
	}
	return false
}

export default MainContainer