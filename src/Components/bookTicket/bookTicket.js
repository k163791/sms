import React from 'react';
import Home from '../Home/Home';
import {MDBInput, MDBContainer, MDBCard, MDBCardBody, form, MDBBtn} from 'mdbreact';
import Scroll from '../Scroll/Scroll';
import Footer from '../Footer/Footer';
class bookTicket extends React.Component {

	constructor(props) {
		super();
		this.userId = '';
		this.sectionId = [];
		this.playerID = '';
		this.seats = 1;
		this.PayOpt = '';
		this.secAssign = 1;
		this.secPrice = 40;
	}

	componentDidMount() {
	this._isMounted = true;
	fetch('http://localhost:3001/getID',{
		method:'post',
		headers:{'Content-Type':'application/json'},
		body : JSON.stringify({
			email : this.props.signInEmail
		})
	})
	.then(response => response.json())
		.then(data => {
			this.userId = Object.values(data);
			console.log(this.userId[0]);
		}).then(result => {
		if(this._isMounted) {
			this.setState({isLoading:false})
			}
		});
		this.getSections();
	}

	componentWillUnmount() {
    this._isMounted = false;
	}

	getSections = () => {
		this._isMounted = true;
		fetch('http://localhost:3001/getSections',{
			method : 'post',
			headers : {'Content-Type' : 'application/json'}
		}).then(response => response.json())
		.then(data => {
			this.sectionId = data;
			console.log(this.sectionId);
		}).then(result => {
		if(this._isMounted) {
			this.setState({isLoading:false})
			}
		});
	}

	// getSectionId = () => {
	// 	this._isMounted = true;
	// 	fetch('http://localhost:3001/getSecId',{
	// 		method : 'post',
	// 		headers : {'Content-Type' : 'application/json'},
	// 		body : JSON.stringify({
	// 			sec_name : this.section
	// 		})
	// 	}).then(response => response.json())
	// 	.then(data => {
	// 		this.secAssign = data;
	// 		console.log(this.secAssign);
	// 	}).then(result => {
	// 	if(this._isMounted) {
	// 		this.setState({isLoading:false})
	// 		}
	// 	});
	// }

	changeSeats = (event) => {
		this.seats = event.target.value;
		console.log(this.seats);
	}

	changeSec = (event) => {
		this.secAssign = event.target.value;
		// console.log(this.secAssign);
		this.sectionId.map((object,i) => {
				if(this.sectionId[i].sec_name === this.secAssign) {
				this.secAssign = this.sectionId[i].id
				this.secPrice = this.sectionId[i].price
				}
		})
		console.log('Section ID : ',this.secAssign)
		// this.getSectionId();
	}

	changePay = (event) => {
		this.PayOpt = event.target.value;
		console.log(this.PayOpt);
	}

	bookNow = () => {
		// console.log('Booking : -');
		// console.log('User ID : ',this.userId);
		// console.log('Section ID : ',this.secAssign);
		// console.log('Number of Seats : ',this.seats);
		// console.log('Payment Option : ',this.PayOpt);
		this.secPrice = this.secPrice * this.seats;
		// console.log('Price : ',this.secPrice);
		this.props.setUserId(this.userId[0]);
		this.props.setPrice(this.secPrice);
		this.props.setSecID(this.secAssign);
		
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
			                <p className="h4 text-left py-4">/Dashboard/Favourite Teams/Book Ticket</p>
			                <hr />
			                <MDBInput label="Match ID" group type="numeric" value={`${this.props.matchId}`} validate/>
			                <p>Payment Options </p>
			                <br/>
			                <select 
			                onChange={this.changeSec}
			                className="browser-default custom-select">
			                 <option>Choose Section</option>
							{
								this.sectionId.map((object,i) => {
									return(
										<option key={this.sectionId[i].id}>
											{this.sectionId[i].sec_name}
										</option>
									);
								})
							}
							</select>
							<br/>
							<select 
			                onChange={this.changePay}
			                className="browser-default custom-select">
			                <option>Choose Payment Method</option>
							 <option value="Card">Card</option>
							 <option value="Visa">Visa</option>	
							</select>
							<MDBInput
							onChange={this.changeSeats}
							label="Number Of Seats" 
							group type="numeric"
							validate/>
			                <MDBBtn onClick={this.bookNow} color="cyan" type="submit">Book</MDBBtn>
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

export default bookTicket;