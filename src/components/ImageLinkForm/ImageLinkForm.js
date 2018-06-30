import React from 'react';
import './ImageLinkForm.css'; 

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3 light orange'>
				{'Input an image URL and this app will detect the face'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
					<button 
						className='w-30 grow f4 link ph1 pv2 dib white bg-light-purple'
						onClick={onButtonSubmit}
						>Detect</button>
				</div>
			</div>
		</div>			
	);
}

export default ImageLinkForm;