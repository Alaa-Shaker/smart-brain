import React from 'react';




class ForLoop extends React.Component{


	render() {
			  const {nameOfClass , styleboxes } = this.props;

			  const items = []

			  for (let i =0 ;i<styleboxes.length ;i++) {

			    items.push( <div className={nameOfClass}  style={styleboxes[i]} key={i.toString()} > </div> ) ;
			  }

			  return (
			    <div>
			      {items}
			    </div>
			  )
			}

}

export default ForLoop;