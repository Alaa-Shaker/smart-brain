import React from 'react';
import './SignIn.css';



class Logo extends React.Component {

	constructor(){
		super()
		this.state={
			signEmail:"",
			SignPassword:"",
			show:false
		}

	}

	onEmailChange = (event)=>{
		//console.log(event.target.value);
		this.setState({signEmail:event.target.value});
	}

	onPasswordChange = (event)=>{
		//console.log(event.target.value);
		this.setState({SignPassword:event.target.value});
	}

	onSubmissionClick =()=>{

		const updateStateUser = this.props.updateStateUser;

		//console.log(this.state);
		fetch('https://rocky-bastion-39416.herokuapp.com/signin' ,{
			method:'post',
			headers:{'Content-Type':'application/json'},
			body: JSON.stringify({email:this.state.signEmail,
								  password:this.state.SignPassword})
		}).then(res=>res.json())
		.then(data=>{
			if (data.id)
			{
				updateStateUser(data);
				this.props.onRouteChange('Home') ;
				//console.log(data);
			}
			else{ this.setState({show:true}); }
		}) ;
	}


	render(){
			const onRouteChange = this.props.onRouteChange;
			return (

					<main className="pa1 black-80">
						  <div className="measure center w-70 shadow-3 pa4">
						    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
						      <div className="mt3">
						        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
						        <input
							         className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
							         type="email"
							         name="email-address"
							         id="email-address" 
							         onChange={this.onEmailChange}
						        />
						      </div>
						      <div className="mv3">
						        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
						        <input
						         className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						         type="password" 
						         name="password"  
						         id="password" 
						         onChange={this.onPasswordChange}
						         />
						      </div>
						      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
						    </fieldset>
						    <div className="">
						      <input
						       onClick={this.onSubmissionClick}
						       className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
						       type="submit"
						       value="Sign in"
						        />

						    </div>
						    <div className="lh-copy mt3">
						      <a href="#0" onClick={()=>onRouteChange('Register')} className="f6 link dim black db">Sign up</a>
						      <a href="#0" className="f6 link dim black db">Forgot your password?</a>
						    </div>
						    	{this.state.show ? <label className="pa0 ma0  f6 orange "> <p  > Email or Password Wrong !!  </p></label> : " " }
						  </div>					 
						</main>

				
		          ) 
		}

}

export default Logo;