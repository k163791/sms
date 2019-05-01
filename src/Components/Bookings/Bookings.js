import React from 'react';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Scroll from '../Scroll/Scroll';
import {MDBContainer, MDBCard, MDBCardBody,form} from 'mdbreact';

const Bookings = ({ onRouteChange }) => {
	return(
		<div>
			<Home onRouteChange={onRouteChange}/>
			<Scroll>
			<MDBContainer >
					<MDBCard >
						<MDBCardBody>
						<form >
			                <p className="h4 text-left py-4">/Dashboard/Bookings</p>
			                <hr />
			             </form>  
						</MDBCardBody>
					</MDBCard>
			</MDBContainer>
			</Scroll>
			<Footer />
		</div>
	);
}

export default Bookings;