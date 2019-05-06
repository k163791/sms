import React from 'react';
import Home from '../Home/Home';
import Scroll from '../Scroll/Scroll';
import Footer from '../Footer/Footer';
const Matches = ({onRouteChange, signInEmail}) => {
	return(
		<div>
			<Home onRouteChange={onRouteChange} signInEmail={signInEmail}/>
			<Scroll></Scroll>
			<Footer />
		</div>
	);


}

export default Matches;