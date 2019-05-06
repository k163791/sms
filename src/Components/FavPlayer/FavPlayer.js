import React from 'react';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Scroll from '../Scroll/Scroll';
import Card from '../Card/Card';
import {MDBContainer, MDBCard, MDBCardBody,form, MDBBtn} from 'mdbreact';

class FavPlayer extends React.Component {
constructor(props) {
	super();
	this.state = {
		pname : '',
	}
	this.matchImage = 'https://i.redd.it/l0ykw9xh8ew21.jpg';
	this.selectedPlayer = 'Paul Pogba';
	this.playerInfo = [];
	this.matchInfo = [];
	this.players = [];
	this.matchNames = '';
}

componentDidMount() {
	this._isMounted = true;
	fetch('http://localhost:3001/players',{
		method:'post',
		headers:{'Content-Type':'application/json'}
	})
	.then(response => response.json())
		.then(data => {
			this.players = Object.values(data);
			console.log(this.players);
		}).then(result => {
		if(this._isMounted) {
			this.setState({isLoading:false})
		}
	});
	this.retrievePlayer();
}

componentWillUnmount() {
    this._isMounted = false;
}

onSelectPlayer = (event) => {
	this.selectedPlayer = event.target.value;
	console.log(this.selectedPlayer);
	this.retrievePlayer();
}

retrievePlayer = () => {
	fetch('http://localhost:3001/player',{
		method : 'post',
		headers : {'Content-Type':'application/json'},
		body : JSON.stringify({
			pname : this.selectedPlayer
		})
	}).then(response => response.json())
	.then(data => {
		this.playerInfo = Object.values(data);
		// console.log(this.playerInfo);
	}).then(result => {
		if(this._isMounted) {
			this.setState({isLoading:false})
		}
	});
}

filterPlayers = () => {
	fetch('http://localhost:3001/filterPlayers',{
		method : 'post',
		headers : {'Content-Type':'application/json'},
		body : JSON.stringify({
			pname : this.selectedPlayer
		})
	}).then(response => response.json())
	.then(data => {
		this.matchInfo = Object.values(data);
		console.log(this.matchInfo);
		console.log(this.playerInfo);
		// console.log(data);
	}).then(result => {
		if(this._isMounted) {
			this.setState({isLoading:false})
		}
	});
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
			                <p className="h4 text-left py-4">/Dashboard/Favourite Players</p>
			                <hr />
			                <div>
			                <select onChange={this.onSelectPlayer}>
			                {
			                	this.players.map((object,i)=> {
			                		return(
			                			<option key={this.players[i].pname}>{this.players[i].pname}</option>
			                		);
			                	})
			                }
			                </select>
			              	</div>
			                <br/>

			                <MDBBtn onClick={this.filterPlayers} color="cyan" type="submit">Submit</MDBBtn>
			                <hr />
			                <div style={{
								display:'flex', 
								flexDirection:'row',
								flexWrap:'wrap',
								alignContent: 'space-around',
							    justifyContent: 'space-between'
							}}>
							{
								this.playerInfo.map((object,i) => {
									return(
										<div key = {this.playerInfo[i].pname}>
											<Card 
												tname = {this.playerInfo[i].pname}
												image = {this.playerInfo[i].image}
												btnn = {false}
											/>
											<br/>
										</div>
									);
								})
							}
							
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

export default FavPlayer;