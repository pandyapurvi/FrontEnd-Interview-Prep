
import React from 'react';
import './styles.css'

const ModalComponent = ({ show, handleClose, content }) => {

	return (
		<div className='modal-container'>
					
			{content.map((item, index) => {
			
							return (
								<div key={index} style={{
										marginTop: '40px'
								}}>
									<div className='close-btn' onClick={handleClose}>X</div>
									{item.header && <h3 className='modal-header'>{item.header}</h3>}
									{item.body && <p className='modal-body'>{item.body}</p>}
									{item.footer && <p className='modal-footer'>{item.footer}</p>}
								</div>
							)
							})}
						</div>
	)

}
export default ModalComponent;