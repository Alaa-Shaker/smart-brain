import React from 'react';




class ForLoop extends React.Component{


	render() {
			  const {styleboxes } = this.props;

			  const items = []

			  for (let i =0 ;i<styleboxes.length ;i++) {

			    items.push( <div className= "bounding-box"  style={styleboxes[i]} key={i.toString()} > </div> ) ;
			  }

			  return (
			    <div>
			      {items}
			    </div>
			  )
			}

}

export default ForLoop;