import React from 'react';
import brain from './brain.png';
import Tilt from 'react-tilt';
import './Logo.css';



const Logo =()=>{
	return (
		    <div className="pa2 ">
			<Tilt className="Tilt pa1 br3 ma3 shadow-2 w-10 backg" options={{ max : 55 }} >
			 	<div className="Tilt-inner"> <img  alt ="logo" src={brain} style={{ "width": "250px " }} /> </div>
			</Tilt>
			</div>
          )

}

export default Logo;