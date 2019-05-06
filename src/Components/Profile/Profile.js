import React from 'react';
import Home from '../Home/Home';
import Scroll from '../Scroll/Scroll';
import Footer from '../Footer/Footer';
import { withAlert } from 'react-alert';
import {MDBContainer, MDBCard, MDBCardBody,form, MDBInput, MDBBtn } from 'mdbreact';
import { Row, Col, Image, Container } from 'react-bootstrap';

class Profile extends React.Component {

constructor(props) {
	super();
	this.state = {
		imge : 'https://i.redd.it/kfw12czosiv21.png',
		Email : '',
		Username : '',
		Name : '',
		Age : '',
		Password : '',
		id : ''
	}
}


// onEmailChange = (event) => {
// 	this.setState({Email : event.target.value})
// }

onUsernameChange = (event) => {
	this.setState({Username : event.target.value})
}

onNameChange = (event) => {
	this.setState({Name : event.target.value})
}

onPasswordChange = (event) => {
	this.setState({Password : event.target.value})
}

onAgeChange = (event) => {
	this.setState({Age : event.target.value})
}

changePicture = (event) => {
	let formData = new FormData();
	formData.append('image',event.target.value);
	console.log(formData);
}

componentDidMount() {
	this._isMounted = true;
	fetch('http://localhost:3001/retrieve',{
		method : 'post',
		headers : {'Content-Type' : 'application/json'},
		body : JSON.stringify({
			email : this.props.signInEmail
		})
	})
	.then(response => response.json())
	.then(data => {
		this.setState({Name : data.name});
		this.setState({Username : data.username});
		this.setState({Email : this.props.signInEmail });
		this.setState({Age : data.age});
		this.setState({Password : data.password});

		// this.setState({data[0]})
	}).then(result => {
		if(this._isMounted) {
			this.setState({isLoading:false})
		}
	});
}

componentWillUnmount() {
    this._isMounted = false;
}

// getID = () => {
// 	fetch('http://localhost:3001/getID',{
// 		method : 'post',
// 		headers : {'Content-Type':'application/json'},
// 		body : JSON.stringify({
// 			email : this.state.Email
// 		})
// 	}).then(response => response.json())
// 		.then(data => {
// 			this.setState({id:data.id});
// 		})
// }

updateProfile = () => {
	// this.getID();
	fetch('http://localhost:3001/updateProfile',{
		method : 'post',
		headers : {'Content-Type' : 'application/json'},
		body : JSON.stringify({
			name : this.state.Name,
			username : this.state.Username,
			email : this.state.Email,
			password : this.state.Password,
			age : this.state.Age,
			id : this.state.id
		})
	}).then(response => response.json())
	.then(data => {
		this.props.onRouteChange('Profile');
		this.props.alert.show('Profile Updated');
		console.log(data);
	}).then(result => {
		if(this._isMounted) {
			this.setState({isLoading:false})
		}
	});

}


uploadFile = () => {
	console.log(this.props.signInEmail);
}

render() {
	return(
		<div>
			<Home onRouteChange={this.props.onRouteChange} signInEmail={this.props.signInEmail}/>
			<Scroll>
			<MDBContainer >
					<MDBCard >
						<MDBCardBody>
						<form >
			                <p className="h4 text-left py-4">/Profile</p>
			                <hr />
			                <Container>
							  <Row>
							    <Col xs={6} md={4}>
							      <Image style={{height:'200px'}} src={this.state.imge} rounded />
    							</Col>
    						   </Row>
    							{ 
    								// <input onChange={this.changePicture} type="file" name="picture" />
    							}
    						<MDBBtn onClick={this.uploadFile} color="cyan" type="submit">Update Profile Image</MDBBtn>
    						</Container>
    							<MDBInput 
    								onChange={this.onUsernameChange} 
    								label="Username" 
    								group type="text" 
    								value={this.state.Username} validate/>
	    						<MDBInput
	    							onChange={this.onNameChange} 
	    							label="Name" 
	    							group type="text" 
	    							value={this.state.Name} validate/>
	    						<MDBInput
	    							onChange={this.onPasswordChange} 
	    							label="Password" 
	    							group type="Password" 
	    							value={this.state.Password} validate/>
	    						<MDBInput
	    							onChange={this.onAgeChange} 
	    							label="Age" 
	    							group type="text" 
	    							value={`${this.state.Age}`} validate/>
	    					<hr />
	    					<MDBBtn onClick={this.updateProfile} color="cyan" type="submit">Update Profile</MDBBtn>
			             </form>  
						</MDBCardBody>
					</MDBCard>
			</MDBContainer>
			</Scroll>
			<Footer />
		</div>
	);
}
	
}

export default withAlert()(Profile);