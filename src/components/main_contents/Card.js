import React from 'react'

function Card(props){
	return(
		<div className='card'>
			<img src={"https://flagcdn.com/w80/" + props.code + ".png"}></img>
			<p>{props.title}</p>
		</div>
	)
}

export default Card