import React from 'react';
import Home from '../Home/Home';
import Scroll from '../Scroll/Scroll';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';
import {MDBContainer, MDBCard, MDBCardBody,form} from 'mdbreact';
class Matches extends React.Component {

	constructor(props) {
		super();
		this.leagues = [];
	}

	componentDidMount() {
		this._isMounted = true;
		fetch('http://localhost:3001/leagues',{
			method : 'post',
			headers : {'Content-Type':'application/json'}
		}).then(response => response.json())
		.then(data => {
			this.leagues = Object.values(data);
			console.log(this.leagues);
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
			<Scroll></Scroll>
			<MDBContainer >
					<MDBCard >
						<MDBCardBody>
						<form >
						{
							this.leagues.map((object,i) => {
								return(
			                			<div key = {this.leagues[i].id}>
			                				<Card
			                					tname = {this.leagues[i].lname}
			                					description = {'Created at : '+this.leagues[i].createdat}
			                					btnn = {false}
			                				/>
			                			</div>
			                	);
							})
						}
						</form>  
						</MDBCardBody>
					</MDBCard>
			</MDBContainer>
			<Footer />
		</div>
	);
	}

}

export default Matches;