import React from 'react';
import Home from '../Home/Home';
import Scroll from '../Scroll/Scroll';
import Footer from '../Footer/Footer';
const Matches = ({onRouteChange}) => {
	return(
		<div>
			<Home onRouteChange={onRouteChange} />
			<Scroll></Scroll>
			<Footer />
		</div>
	);


}

export default Matches;