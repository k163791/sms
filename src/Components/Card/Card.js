import React from 'react';
import { Card,Button } from 'react-bootstrap';
const Cards = (props) => {
	return(
		<div style={{width:'300px'}}>
		<Card >
				 <Card.Img style={{height:'300px'}}
				  variant="top" 
				  src={props.image}
				  alt='teamImage' />
			<Card.Body>
				<Card.Title>{props.tname}</Card.Title>
				<Card.Text>
				   Team Info
				</Card.Text>
				<Button variant="primary">See Matches</Button>
			</Card.Body>
		</Card>
		
		</div>
	);
}

export default Cards;