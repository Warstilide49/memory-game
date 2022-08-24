import "../styles/modal.css"

export default function Modal(props){

	return(
		<div className='modal_bg' onClick={(e) =>{props.setModal(false)}}>
			<div className='modal' onClick={(e) =>{e.stopPropagation();props.setModal(true)}}>
				<p><strong>{props.message}</strong></p>
			</div>
		</div>
	)
}
