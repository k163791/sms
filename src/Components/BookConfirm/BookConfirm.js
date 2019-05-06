import React from 'react';
import Home from '../Home/Home';
import Scroll from '../Scroll/Scroll';
import Footer from '../Footer/Footer';
import { withAlert } from 'react-alert';
import {MDBContainer, MDBCard, MDBCardBody, form, MDBBtn} from 'mdbreact';
class BookConfirm extends React.Component {

	constructor(props) {
		super();
	}

	bookTickets = () => {
		fetch('http://localhost:3001/book',{
			method : 'post',
			headers : {'Content-Type':'application/json'},
			body : JSON.stringify({
				user_id : this.props.userId,
				match_id : this.props.matchid,
				section_id : this.props.secAssign
			})
		}).then(response => response.json())
		.then(data => {
			this.props.alert.show('Transaction Was Successfull');
			console.log(data);
			this.props.onRouteChange('Home');
		})
	}

	whatSec = () => {
		if(this.props.secAssign === 1){
			return("Gold")
		} else if(this.props.secAssign === 2) {
			return("Silver")
		} else if(this.props.secAssign === 3) {
			return("Bronze");
		}
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
			                <p className="h4 text-left py-4">/Confirmation</p>
			                <hr />
			                <p className="h4 text-left py-4">Booking Details</p>
			                <p className='h5 text-left py-4'>
			                	User : {this.props.signInEmail}<br/>
			                	Username : {this.props.Username}<br/>
			                	User ID : {this.props.userId}<br/>
			                	Match : {this.props.team1_name + ' VS ' + this.props.team2_name}<br/>
			                	Section ID : {this.props.secAssign}<br/>
			                	Section : {this.whatSec()}<br/>
			                	Match ID : {this.props.matchid}<br/>
			                	Price : {this.props.secPrice}
			                </p>
			                <hr/>
			                <MDBBtn onClick={this.bookTickets} color="cyan" type="submit">Confirm</MDBBtn>
			                <MDBBtn onClick={()=>this.props.onRouteChange('Dashboard')} color="cyan" type="submit">Cancel</MDBBtn>
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


export default withAlert()(BookConfirm);