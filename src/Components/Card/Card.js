import React from 'react';
import { Card,Button } from 'react-bootstrap';
class Cards extends React.Component {

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


	renderButton() {
		
		if(this.props.btnn === true) {
			return(
				<Button onClick={()=>this.props.setMatchID(this.props.id)} variant="primary">{this.props.desc}</Button>
			);
		}
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
				{this.renderButton()}
			</Card.Body>
		</Card>
		
		</div>
	);
}

}

export default Cards;