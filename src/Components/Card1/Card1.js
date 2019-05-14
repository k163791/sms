import React from 'react';
import { Card,Button } from 'react-bootstrap';
class Card1 extends React.Component {
	constructor(props) {
		super();
	}
	componentDidMount() {
		console.log('Ticket : ',this.props.tname);
		this._isMounted = true;
		
		if(this._isMounted) {
			this.setState({isLoading:false})
		}
	}

	componentWillUnmount() {
    	this._isMounted = false;
	}

	cancelTicket = () => {
		console.log(this.props.tname);
		fetch('http://localhost:3001/cancel',{
			method : 'post',
			headers : {'Content-Type' : 'application/json'},
			body : JSON.stringify({
				id : this.props.tname
			})
		})
		this.props.onRouteChange('Dashboard');
	}

	render() {
		return(
		<div style={{width:'300px'}}>
		<Card >
				 <Card.Img style={{height:'200px'}}
				  variant="top" 
				  src={this.props.image}
				  alt='teamImage' />
			<Card.Body>
				<Card.Title>{this.props.tname}</Card.Title>
				<Card.Text>
				   {this.props.description}
				</Card.Text>
				<Button onClick={this.cancelTicket} variant="primary">{this.props.desc}</Button>
			</Card.Body>
		</Card>
		
		</div>
	);
}
}

export default Card1;