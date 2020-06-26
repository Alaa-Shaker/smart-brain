import React ,{Component} from 'react';
import Navigation from'./component/Navigation/Navigation';
import Logo from'./component/Logo/Logo';
import ImageLinkForm from'./component/ImageLinkForm/ImageLinkForm';
import Rank from'./component/Rank/Rank';
import ImageFaces from './component/ImageFaces/ImageFaces'
import SignIn from'./component/SignIn/SignIn';
import Register from'./component/Register/Register';


import Particles from 'react-particles-js';

import './App.css';

const ParticlesOptions={

                    particles: {
                    	
                    	number: { 
					              value: 200, 
					              density: { 
					                enable: true, 
					                value_area: 1000, 
					              } },
                        line_linked:{
                        	shadow:{
                        		enable:true,
                        		color :"#3CA9D1",
                        		blur:0
                        	}
                        }
                    }
                }



const initialState={
						input:'',
						urlImage:'',
						numberFaces:0,
						boxes:[] ,
						router : 'SignIn',
						isSetRoute:false,
						user:{
							 id :0,
							 name :'',
							 email :'',
							 entries :0,
							 joined :''
						}
					};


class App extends Component {
	constructor(){
			super();
				   
			this.state =initialState;
				}

	updateStateUser=(data)=>{

		this.setState({user:{
							 id :data.id,
							 name :data.name,
							 email :data.email,
							 entries :data.entries,
							 joined :data.joined }

		 			 })

		// console.log(this.state);
	}

    onInputChange=(event)=>{
		this.setState({input:event.target.value});

	}


	addBox=(box)=>{
		this.setState({boxes:box});
	}

	calculateFaceBorder=(response)=>{

		let boxes=[];
		let numberFaces = Object.keys(response.outputs[0].data.regions).length;

		for (let box_region of response.outputs[0].data.regions )
			{
				const data= box_region.region_info.bounding_box;
				const wid=document.getElementById('imageInput').width;
				const high=document.getElementById('imageInput').height;

				const box={topRow:data.top_row*high,
						   leftCol:data.left_col*wid,
						   rightCol:wid-(data.right_col*wid),
						   bottomRow:high-(data.bottom_row*high)  };
				boxes.push(box);
			}
	this.setState({numberFaces:numberFaces});
	 return boxes;

	}

	onButtonClick=(event)=>{
		this.setState({urlImage:this.state.input});

		fetch('https://rocky-bastion-39416.herokuapp.com/imageURL', 
			 {
				method:'post',
				headers:{'Content-Type':'application/json'},
				body:JSON.stringify({imageURL:this.state.input})
			})
		.then(resp=>resp.json())      ///////// cause get from fetch so we need to extract
		.then(response =>{   
							 if (response){
								fetch('https://rocky-bastion-39416.herokuapp.com/image', 
								 {
									method:'put',
									headers:{'Content-Type':'application/json'},
									body:JSON.stringify({id:this.state.user.id})
								})
								.then(res => res.json())
								.then(data => this.setState(Object.assign(this.state.user,{entries:data})))
								}

			this.addBox(this.calculateFaceBorder(response)) 
		})
		.catch((err)=>console.log('Error ', err))					
				 
	}

	onRouteChange=(rout)=>{
		if (rout=== 'SignIn' || rout=== 'Register' ){
			this.setState(initialState);
		}else{
			this.setState({isSetRoute: true});
		}

		this.setState({router:rout});

	}


	render(){
			  return (
			    <div className="App">

			   	  <Particles className="particles" params={ParticlesOptions} />
			      <Navigation
			       onRouteChange={this.onRouteChange} 
			       isSetRoute={this.state.isSetRoute} />

			      <Logo/>
					      { this.state.router === 'SignIn'
					              ?<SignIn updateStateUser ={this.updateStateUser} onRouteChange={this.onRouteChange} /> 
							      :(this.state.router === 'Register') ?
							      	<Register updateStateUser ={this.updateStateUser} onRouteChange={this.onRouteChange} />
							        :<div>
								         <Rank name={this.state.user.name} entries={this.state.user.entries} numberFaces={this.state.numberFaces} />

								         <ImageLinkForm 
									      onInputChange={this.onInputChange} 
									      onButtonClick={this.onButtonClick} 
								          />
								         <ImageFaces urlImage={this.state.urlImage} boxes={this.state.boxes}  />
							        </div>
						  }

			   </div>
			  );
			}
}

export default App;
