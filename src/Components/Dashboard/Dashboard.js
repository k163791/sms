import React from 'react';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Scroll from '../Scroll/Scroll';
import {MDBContainer, MDBCard, MDBCardBody,form, MDBBtn} from 'mdbreact';
const Dashboard = ({onRouteChange, signInEmail}) => {
	const style = {
		margin : '0',
		border : '0',
		padding : '0'
	}

	return(
		<div>
			<Home onRouteChange={onRouteChange} signInEmail={signInEmail}/>
			<Scroll>
			<div style={style}>
				<MDBContainer >
					<MDBCard >
						<MDBCardBody>
						<form >
			                <p className="h4 text-left py-4">/Dashboard</p>
			                <hr />
			                <MDBBtn onClick={()=>onRouteChange('FavTeam')} color="cyan" type="submit">Favourite Team</MDBBtn>
			                <MDBBtn onClick={()=>onRouteChange('FavPlayer')} color="cyan" type="submit">Favourite Player</MDBBtn>
			                <MDBBtn onClick={()=>onRouteChange('Bookings')} color="cyan" type="submit">Your Bookings</MDBBtn>
			             </form>  
						</MDBCardBody>
					</MDBCard>
				</MDBContainer>
			</div>
			</Scroll>
			<Footer />
		</div>
	);


}

export default Dashboard;