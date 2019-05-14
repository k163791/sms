import React from 'react';
import Card from '../Card/Card';
import Home from '../Home/Home';
import {MDBContainer, MDBCard, MDBCardBody,form} from 'mdbreact';
class DisplayMatches extends React.Component {
	constructor(props){
		super();
		this.matchImage = 'https://i.redd.it/l0ykw9xh8ew21.jpg';
	}

	render() {
		return(
			<div>
			<div>
				<Home onRouteChange={this.props.onRouteChange} signInEmail={this.props.signInEmail}/>
			</div>
			<br />
			<MDBContainer>
					<MDBCard >
						<MDBCardBody>
						<form >
						<p className="h4 text-left py-4">/Matches</p>
			            <hr />
						<div style={{
						display:'flex', 
						flexDirection:'row',
						flexWrap:'wrap',
						alignContent: 'space-around',
					    justifyContent: 'space-between'
						}}>
							{
								this.props.matchInfo.map((object,i) => {
									return(
										<div key={this.props.matchInfo[i].id}>
											<Card
											tname = {this.props.matchInfo[i].team1_name + ' VS ' + this.props.matchInfo[i].team2_name}	
											image = {this.matchImage}
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

export default DisplayMatches;