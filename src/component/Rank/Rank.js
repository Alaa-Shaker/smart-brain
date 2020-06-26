import React from 'react';

const Rank =({name , entries, numberFaces})=>{
	return (
		  <div className="tc ma1" >
		    <div className="f3">
			    	{`${name} , Your current rank is ...`}
					
			</div>

			<div className="f1">
			{entries}
			</div>

			<div className="tc" >
				<p> {`Number of Faces in Pictures Is : ${numberFaces}`}</p>
			</div>`

		  </div>
          )

}

export default Rank;