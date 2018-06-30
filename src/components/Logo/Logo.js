import React from 'react';
import Tilt from 'react-tilt';
import ai from './ai-image.png'
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 65 }} style={{ height: 160, width: 160 }} >
 				<div className="Tilt-inner pa2">
 					<img style={{paddingTop: '12px'}}alt='' src={ai}/>
 				</div>
			</Tilt>
		</div>
	);
}

export default Logo;