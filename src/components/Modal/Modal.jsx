import { useEffect } from 'react'
import React from 'react'

const Modal = ({ children, close }) => {
	useEffect(() => {
		const handleESC = (e) => {
			console.log('esc')
			if (e.code === 'Escape') {
				close()
			}
		}
		document.addEventListener('keydown', handleESC)
		return () => {
			document.removeEventListener('keydown', handleESC)
		}
	}, [close])
	return (
		<div
			className='modal fade show'
			style={{ display: 'block', backdropFilter: 'blur(5px)' }}
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'> Modal</h5>
						<button
							onClick={close}
							type='button'
							className='btn-close'
							aria-label='Close'
						></button>
					</div>
					<div className='modal-body'>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
