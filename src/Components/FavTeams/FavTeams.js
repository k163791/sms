import React from 'react';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Scroll from '../Scroll/Scroll';
import Card from '../Card/Card';
import {MDBContainer, MDBCard, MDBCardBody, form, MDBBtn} from 'mdbreact';

class FavTeams extends React.Component {

constructor(props) {
	super();
	this.state = {
		selectedTeam : 'Manchester United',

	}
	this.matchImage = 'https://i.redd.it/l0ykw9xh8ew21.jpg';
	this.teams = [];
	this.matchInfo = [];
}


componentDidMount() {
	this._isMounted = true;
	fetch('http://localhost:3001/teams',{
		method:'post',
		headers:{'Content-Type':'application/json'}
	})
	.then(response => response.json())
		.then(data => {
			this.teams = Object.values(data);
			// console.log(this.teams);
		}).then(result => {
		if(this._isMounted) {
			this.setState({isLoading:false})
		}
	});
}

componentWillUnmount() {
    this._isMounted = false;
}

onSelectTeam = (event) => {
	this.setState({selectedTeam:event.target.value});
	console.log(event.target.value);

}

filterMatches = () => {
	fetch('http://localhost:3001/filterMatches',{
		method : 'post',
		headers : {'Content-Type' : 'application/json'},
		body : JSON.stringify({
			tname : this.state.selectedTeam
		})
		
	}).then(response => response.json())
	.then(data => {
		this.matchInfo = Object.values(data);
		console.log(data);
	}).then(result => {
		if(this._isMounted) {
			this.setState({isLoading:false})
		}
	});
}


render() {
	return(
		<div>
			<Home onRouteChange={this.props.onRouteChange}  signInEmail={this.props.signInEmail}/>
			<Scroll>
			<MDBContainer >
					<MDBCard >
						<MDBCardBody>
						<form >
			                <p className="h4 text-left py-4">/Dashboard/Favourite Teams</p>
			                <hr />
			                <div>
			                <select onChange={this.onSelectTeam}>
			                {
			                	this.teams.map((object,i)=> {
			                		return(
			                			<option key={this.teams[i].tname}> 
			                				{this.teams[i].tname}
			                			</option>
			                			)
			                		})
			                	})
			                }
			                </select>
			                <br/>
			                <MDBBtn onClick={this.filterMatches} color="cyan" type="submit">Submit</MDBBtn>
			                <hr />
			                {
			                	<div style={{
								display:'flex', 
								flexDirection:'row',
								flexWrap:'wrap',
								alignContent: 'space-around',
							    justifyContent: 'space-between'
							}}>
							{
								this.matchInfo.map((object,i) => {
									return(
										<div key = {this.matchInfo[i].id}>
											<Card 
												setMatchID={this.props.setMatchID}
												onRouteChange={this.props.onRouteChange}
												id = {this.matchInfo[i].id}
												tname = {this.matchInfo[i].team1_name + ' VS ' + this.matchInfo[i].team2_name}
												image = {this.matchImage}
												description = {this.matchInfo[i].dateandtime}
												desc = {'Book Ticket'}
												btnn = {true}
											/>
											<br/>
										</div>
									);
								})
							}
			              	</div>


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

export default FavTeams;