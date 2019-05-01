import React from 'react';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Scroll from '../Scroll/Scroll';
import {MDBContainer, MDBCard, MDBCardBody, form, MDBBtn} from 'mdbreact';

class FavTeams extends React.Component {

constructor(props) {
	super();
	this.teams = [];
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
			console.log(this.teams);
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
			<Home onRouteChange={this.props.onRouteChange}/>
			<Scroll>
			<MDBContainer >
					<MDBCard >
						<MDBCardBody>
						<form >
			                <p className="h4 text-left py-4">/Dashboard/Favourite Teams</p>
			                <hr />
			                <div>
			                <select>
			                {
			                	this.teams.map((object,i)=> {
			                		return(
			                			<option key={this.teams[i].tname}>{this.teams[i].tname}</option>
			                		);
			                	})
			                }
			                </select>
			                <br/>
			                <MDBBtn color="cyan" type="submit">Submit</MDBBtn>
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