import React from 'react';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Scroll from '../Scroll/Scroll';
import Card from '../Card/Card';
import {MDBContainer, MDBCard, MDBCardBody,form} from 'mdbreact';

class Bookings extends React.Component {

	constructor(props) {
		super();
		this.state = {
			imge : 'https://i.redd.it/a5yp5ppp86w21.png'
		}
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

	getTeamNames = (event) => {
		fetch('http://localhost:3001/getTeams',{
			method : 'post',
			headers : {'Content-Type' : 'application/json'},
			body : JSON.stringify({
				id : event 
			})
		}).then(response => response.json())
		.then(data => {
			console.log(data.team2_name);
			return (data.team1_name + ' VS ' + data.team2_name);
		})
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
			                				<Card 
			                					tname = {this.getTeamNames(this.tickets[i].match_id)}
			                					image = {this.state.imge}
			                					description = {'Created at :' + this.tickets[i].createdat}
			                					desc = {'Cancel Ticket'}
			                					btnn = {true}
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