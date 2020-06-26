import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm =({onInputChange,onButtonClick})=>{
	return (
		    <div className="pa2 tc">
			    <p className="f3">
			    	{`This Magic Brain detect faces in your picture , Git it try it . `}
			    </p>

			    <div className="ma3 pa2 br3 shadow-5 ImageLinkForm">
				    <input className=" pa2 ma2 br3 f4 w-60 tc " type="text" onChange={onInputChange} placeholder="Enter link to image here !" />
				    <button className=" pa2 ma2 br3 f4 w-20 grow ph3 pv2 dib bg-light-green black" onClick={onButtonClick} >Detect</button>		
				</div>

			</div>
          )

}

export default ImageLinkForm;