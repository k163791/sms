import React from 'react';
import Home from '../Home/Home';
import Scroll from '../Scroll/Scroll';
import Footer from '../Footer/Footer';
import {MDBContainer, MDBCard, MDBCardBody,form, MDBInput, MDBBtn } from 'mdbreact';
import { Row, Col, Image, Container } from 'react-bootstrap';

class Profile extends React.Component {

constructor(props) {
	super();
	this.state = {
		imge : 'https://i.redd.it/kfw12czosiv21.png'
	}
}

changePicture = (event) => {
	this.setState({imge:event.target.value});
	console.log(event.target.value);
}

uploadFile = () => {
	
}

render() {
	return(
		<div>
			<Home onRouteChange={this.props.onRouteChange} />
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
    						 <input onChange={this.changePicture} type="file" name="picture" />
    						<MDBBtn onClick={this.uploadFile} color="cyan" type="submit">Update Profile Image</MDBBtn>
    						</Container>
    							<MDBInput label="Username" group type="text" value="uzair" validate/>
	    						<MDBInput label="Name" group type="text" validate/>
	    						<MDBInput label="Email" group type="text" validate/>
	    						<MDBInput label="Password" group type="Password" validate/>
	    						<MDBInput label="Age" group type="Integer" validate/>
	    					<hr />
	    					<MDBBtn color="cyan" type="submit">Update Profile</MDBBtn>
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

export default Profile;