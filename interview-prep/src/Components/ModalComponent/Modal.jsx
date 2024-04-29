import ModalComponent from './ModalComponent.jsx'
import React, { useState } from 'react';
import './styles.css';



const Modal = () => {
	const [show, setShow] = useState(false);
	
	const handleClose = () => setShow(!show);
	const content = [
		{
			header: 'What is a Modal?',
			body: 'A modal is a dialog box or popup, displayed over the current page.',
			footer: 'Footer'
		},

	]
	return <>
		<h2>Modal pop-up</h2>
	<div className='modal-component-container'>
		
		{!show && <button onClick={handleClose}>Click to open modal</button>}
		{show && <ModalComponent show={show} handleClose={() => setShow(false)} content={content} />}
		</div>
		</>
}

export default Modal;