import React, { Component } from 'react';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Contact from './Components/Contact/Contact';
import Teams from './Components/Teams/Teams';
import Footer from './Components/Footer/Footer';
import Scroll from './Components/Scroll/Scroll';
import Matches from './Components/Matches/Matches';
import FavPlayer from './Components/FavPlayer/FavPlayer';
import FavTeams from './Components/FavTeams/FavTeams';
import Bookings from './Components/Bookings/Bookings';
import Profile from './Components/Profile/Profile';
import './App.css';
/* 
  Bismillah
"I am the Greatest" - Muhammad Ali
 Components To Make: 
  1.Login ..Done
  2.SignUp .. Done
  3.Home .. Done
  4.Dashboard ..Done
  5.Profile .. Will do After Server Side
  6.Contact ..Done
  7.Teams ..Done
  8.Your Bookings .. Will do After Server Side
*/



class App extends Component {
  constructor() {
    super();
    this.state = {
      route : 'Login'
    }
  }


  onRouteChange = (route) => 
{
  this.setState({route: route});
}


decideComponent = (route) => {
  if(this.state.route === 'Home') {
      return(
        <div> 
          <Home onRouteChange={this.onRouteChange} />
          <Scroll></Scroll>
          <Footer/>
        </div>
        );
  } else if (this.state.route === 'Login') {
      return <Login onRouteChange={this.onRouteChange} />
  } else if (this.state.route === 'SignUp') {
      return <SignUp onRouteChange={this.onRouteChange} />
  } else if (this.state.route === 'Dashboard') {
      return <Dashboard onRouteChange={this.onRouteChange} />
  } else if (this.state.route === 'Teams') {
      return <Teams onRouteChange={this.onRouteChange} />
  } else if (this.state.route === 'Contact') {
      return <Contact onRouteChange={this.onRouteChange} />
  } else if (this.state.route === 'Matches') {
      return <Matches onRouteChange={this.onRouteChange} />
  } else if (this.state.route === 'FavPlayer') {
    return <FavPlayer onRouteChange={this.onRouteChange}/>
  } else if (this.state.route === 'FavTeam') {
    return <FavTeams onRouteChange={this.onRouteChange}/>
  } else if (this.state.route === 'Bookings') {
    return <Bookings onRouteChange={this.onRouteChange}/>
  } else if (this.state.route === 'Profile') {
    return <Profile onRouteChange={this.onRouteChange} />
  }

}


  render() {
    return (
      <div className="App">
        {
          this.decideComponent(this.state.route)
        }
      </div>
    );
  }
}

export default App;
