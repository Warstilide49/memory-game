import React from 'react'

function Card(props){
	
	return(
		<div className='card' onClick={(e) => {props.cardListener(e, props.code)}}>
			<img src={"https://flagcdn.com/w80/" + props.code + ".png"} alt={"Flag of country code: " + props.code}></img>
			<p>{props.title}</p>
		</div>
	)
}

export default Card