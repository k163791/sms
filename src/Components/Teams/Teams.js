import React from 'react';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Scroll from '../Scroll/Scroll';
import Card2 from '../Card2/Card2';
class Teams extends React.Component /*= ({onRouteChange}) =>*/ {
constructor(props) {
	super();
	this.state = {
		// teamData : {}
		newObj : '',
		tname : '',
		image : ''
	}
	// this.newObj = null;
	this.teamData = [];
	this.i = 0;
	// this.isLoading:true;
}

componentDidMount() {
    this._isMounted = true;
  	fetch('http://localhost:3001/getimage',{
		method: 'post',
		headers: {'Content-Type':'application/json'},
	})
	.then(response => response.json())
	.then(data => {
		// this.setState({newObj: Object.values(data)});
		this.teamData = Object.values(data);
		console.log(this.teamData);
		// this.setState({tname:this.state.newObj[0].tname})
		// this.setState({image:this.state.newObj[0].image});
	}).then(result => {
		if(this._isMounted) {
			this.setState({isLoading:false})
		}
	});
}

componentWillUnmount() {
    this._isMounted = false;
}

check = () => {
	console.log(this.state.newObj);
}


	render() {
		return(
		<div>
			<div>
				<Home onRouteChange={this.props.onRouteChange} signInEmail={this.props.signInEmail}/>
				<br/>
			</div>
			<div>
				<Scroll>
					<div style={{
						display:'flex', 
						flexDirection:'row',
						flexWrap:'wrap',
						alignContent: 'space-around',
					    justifyContent: 'space-between'
					}}>
					{
						this.teamData.map((object,i) => {
							return(
								<div key = {this.teamData[i].tname}>
									<Card2
										setMatches = {this.props.setMatches}
										setPlayerRecord = {this.props.setPlayerRecord}
										onRouteChange = {this.props.onRouteChange}
										id = {this.teamData[i].id}
										tname = { this.teamData[i].tname }
										image = { this.teamData[i].image } 
										desc = {'Players'}
										desc1 = {'Matches'}
										/>
									<br />
								</div>

							)
						})
					}
					</div>
				</Scroll>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
	}
	
}

export default Teams;