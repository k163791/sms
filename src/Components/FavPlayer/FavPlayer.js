import React from 'react';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Scroll from '../Scroll/Scroll';
import {MDBContainer, MDBCard, MDBCardBody,form, MDBBtn} from 'mdbreact';

class FavPlayer extends React.Component {
constructor(props) {
	super();
	this.state = {
		pname : ''
	}
	this.players = [];
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
			                <p className="h4 text-left py-4">/Dashboard/Favourite Players</p>
			                <hr />
			                <div>
			                <select>
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
			                <MDBBtn color="cyan" type="submit">Submit</MDBBtn>
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