import React from 'react';
import Card from '../Card/Card';
import Home from '../Home/Home';
import {MDBContainer, MDBCard, MDBCardBody,form} from 'mdbreact';
class DisplayPlayers extends React.Component {
	constructor(props){
		super();
	}

	render() {
		return(
			<div>
			<div>
				<Home onRouteChange={this.props.onRouteChange} signInEmail={this.props.signInEmail}/>
			</div>
			<br />
			<MDBContainer >
					<MDBCard >
						<MDBCardBody>
						<form >
						<p className="h4 text-left py-4">/Players</p>
			            <hr />
						<div style={{
						display:'flex', 
						flexDirection:'row',
						flexWrap:'wrap',
						alignContent: 'space-around',
					    justifyContent: 'space-between'
						}}>
							{
								this.props.playerInfo.map((object,i) => {
									return(
										<div key={this.props.playerInfo[i].id}>
											<Card
											tname = {this.props.playerInfo[i].pname}	
											image = {this.props.playerInfo[i].image}
											btnn = {false} 
											/>
										</div>
									);
								})
							}
							</div>
						</form>
						</MDBCardBody>
					</MDBCard>
			</MDBContainer>
			</div>
		);
	}	
}

export default DisplayPlayers;