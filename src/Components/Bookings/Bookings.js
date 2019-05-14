import React from 'react';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Scroll from '../Scroll/Scroll';
import Card1 from '../Card1/Card1';
import {MDBContainer, MDBCard, MDBCardBody,form} from 'mdbreact';

class Bookings extends React.Component {

	constructor(props) {
		super();
		this.state = {
			imge : 'https://i.redd.it/a5yp5ppp86w21.png',
			// team1_name : '',
			// team2_name : ''
		}
		this.team1_name = '';
		this.team2_name = '';
		this.tickets = [];
		this.matchNames = [];
	}

	componentDidMount() {
		this._isMounted = true;
		fetch('http://localhost:3001/getTickets',{
			method : 'post',
			headers : {'Content-Type':'application/json'},
			body : JSON.stringify({
				email : this.props.signInEmail
			})
		}).then(response => response.json())
		.then(data => {
			this.tickets = Object.values(data);
			console.log(this.tickets);
		}).then(result => {
		if(this._isMounted) {
			this.setState({isLoading:false})
		}
	});
	}

	componentWillUnmount() {
		this._isMounted = false;
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
			                <p className="h4 text-left py-4">/Dashboard/Bookings</p>
			                <hr />
			                <div style={{
								display:'flex', 
								flexDirection:'row',
								flexWrap:'wrap',
								alignContent: 'space-around',
							    justifyContent: 'space-between'
							}}>
			                {
			                	
			                	this.tickets.map((object,i) => {
			                		return(
			                			<div key = {this.tickets[i].id}>
			                				<Card1 

			                					tname = {this.tickets[i].id}
			                					image = {this.state.imge}
			                					description = {'Created at :' + this.tickets[i].createdat}
			                					desc = {'Cancel Ticket'}
			                					onRouteChange= {this.props.onRouteChange}
			                				/>
			                				<br />
			                			</div>
			                		)
			                	})
			                }
			               </div>
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

export default Bookings;