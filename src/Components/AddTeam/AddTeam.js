import React from 'react';
import {MDBInput, MDBContainer, MDBCardBody, MDBCard, MDBBtn} from 'mdbreact';
class AddTeam extends React.Component {
	constructor() {
		super();
		this.TeamName = '';
		this.country = '';
		this.ratings = '';
	}


	onNameChange = (event) => {
		this.TeamName = event.target.value;
	}

	onCountry = (event) => {
		this.country = event.target.value;
	}

	onRatings = (event) => {
		this.ratings = event.target.value;
	}

	onAddTeamDB = () => {
		fetch('http://localhost:3001/addTeam',{
			method : 'post',
			headers : {'Content-Type':'application/json'},
			body : JSON.stringify({
				tname : this.TeamName,
				country : this.country,
				ratings : this.ratings
			})
		}).then(response => response.json())
		.then(data => {
			console.log(data);
			this.props.onRouteChange('Login');
		})
	}


	render() {
		return(
			<div>
			<br />
			<MDBContainer >
					<MDBCard >
						<MDBCardBody>
						<form >
						<p className="h4 text-left py-4">/Admin/Add Team</p>
				<MDBInput
                onChange={this.onNameChange}
                label="Team Name"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                onChange={this.onCountry}
                label="Country"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                onChange={this.onRatings}
                label="Ratings"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <br/>
              <hr/>
              <MDBBtn onClick={this.onAddTeamDB} color="cyan" type="submit">Add Bread to Teams</MDBBtn>
              </form>
              </MDBCardBody>
			</MDBCard>
			</MDBContainer>
			</div>
		);
	}

}

export default AddTeam;