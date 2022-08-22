import "../styles/modal.css"

export default function Modal(props){
	return(
		<div className='modal_bg' onClick={(e) =>{props.setModal(false)}}>
			<div className='modal'>
				<p><strong>Congrats, you've won!</strong></p>
			</div>
		</div>
	)
}
