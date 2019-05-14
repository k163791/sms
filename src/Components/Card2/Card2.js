import React from 'react';
import { Card,Button } from 'react-bootstrap';
class Card2 extends React.Component {
	constructor(props) {
		super();
	}
	componentDidMount() {
		this._isMounted = true;
		
		if(this._isMounted) {
			this.setState({isLoading:false})
		}
	}

	componentWillUnmount() {
    	this._isMounted = false;
	}

	displayPlayers = () => {
		fetch('http://localhost:3001/displayPlayers',{
			method : 'post',
			headers : {'Content-Type':'application/json'},
			body : JSON.stringify({
				team_id : this.props.id
			})
		}).then(response => response.json())
		.then(data => {
			this.props.setPlayerRecord(data);
			this.props.onRouteChange('displayPlayer');
			console.log(data);
		})

	}

	displayMatches = () => {
		fetch('http://localhost:3001/displayMatches',{
			method : 'post',
			headers : {'Content-Type':'application/json'},
			body : JSON.stringify({
				id : this.props.id
			})
		}).then(response => response.json())
		.then(data => {
			this.props.setMatches(data);
			this.props.onRouteChange('displayMatches');
			console.log(data);

		})
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
				<Button onClick={this.displayPlayers} variant="primary">{this.props.desc}</Button>
				<Button onClick={this.displayMatches} variant="primary">{this.props.desc1}</Button>
			</Card.Body>
		</Card>
		</div>
	);
}
}

export default Card2;