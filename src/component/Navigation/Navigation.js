import React from 'react';

const Navigation =( {onRouteChange , isSetRoute} )=>{
	
	if(isSetRoute===true)
	    {
			return (
				<div className="flex justify-end pa1 mr2 "> 
				<div className="dim pointer">
					<p onClick={()=> onRouteChange ('SignIn')} className ="pa2 ph4 f4 shadow-1 hover-orange hover-bg-light-gray grow">Sign Out</p>
				</div>
		   </div> )
		}
		else{
			return (
				<div className="flex justify-end pa1 mr2 "> 

					<div className="dim pa2  pointer">
						<p onClick={()=> onRouteChange ('Register')} className ="pa2 ph4 f4 shadow-1 hover-orange hover-bg-light-gray grow">Register</p>
					</div>

					<div className="dim pa2  pointer">
						<p onClick={()=> onRouteChange ('SignIn')} className ="pa2 ph4 f4 shadow-1 hover-orange hover-bg-light-gray grow">Sign in</p>
					</div>

				</div> 
		 )

		}


		

}

export default Navigation;