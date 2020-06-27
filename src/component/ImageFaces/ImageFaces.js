import React from 'react';
import Tilt from 'react-tilt';
import ForLoop from'../ForLoop/ForLoop';
import './ImageFaces.css';


const ImageFaces =({urlImage ,boxes })=>{
	var styleboxes=[];
	for (let box of boxes) {
				var stylebox ={top:box.topRow, right:box.rightCol ,bottom:box.bottomRow ,left:box.leftCol };
				styleboxes.push(stylebox);
				}

	return (

			<div className="center">
			    <div className="pa2 w-40 margin_left">
					<Tilt className="Tilt pa1 br3 ma3 shadow-2 " options={{ max : 55 }} >
					 	<div className="Tilt-inner ImageFaces ">

					 		<div >
						 	 <img id="imageInput"  alt ="ImageFaces" src={urlImage} />

						 			<ForLoop  styleboxes={styleboxes} />							  						 	

							 </div>
						 </div>
					 	 
					</Tilt>
				</div>
			</div>

          )

}
//		<div className='bounding-box'  style={stylebox} >
export default ImageFaces;
