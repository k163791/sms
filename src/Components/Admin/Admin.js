import React from 'react';
import {MDBContainer, MDBCard, MDBCardBody, form, MDBBtn} from 'mdbreact';
class Admin extends React.Component {
	constructor(props){
		super();
	}

	onTeamAdd = () => {
		this.props.onRouteChange('TeamAdd');
	}

	onAddPlayer = () => {
		this.props.onRouteChange('AddPlayer');
	}

	onAddMatches = () => {
		this.props.onRouteChange('addMatches');
	}

	render() {
		return(
			<div>
			<br />
			<MDBContainer >
					<MDBCard >
						<MDBCardBody>
						<form >
						<p className="h4 text-left py-4">/Admin</p>
						<MDBBtn onClick={this.onTeamAdd} color="cyan" type="submit">Add Bread to Teams</MDBBtn>
						<MDBBtn onClick={this.onAddPlayer} olor="cyan" type="submit">Add Bread to Players</MDBBtn>
						<MDBBtn onClick={this.onAddMatches} color="cyan" type="submit">Add Bread to Matches</MDBBtn>
						</form>
						</MDBCardBody>
					</MDBCard>
			</MDBContainer>
			</div>
		);
	}

}

export default Admin;