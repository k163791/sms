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
import BookTicket from './Components/bookTicket/bookTicket';
import BookConfirm from './Components/BookConfirm/BookConfirm';
// import { Provider as AlertProvider } from 'react-alert';
// import AlertTemplate from 'react-alert-template-basic';
import './App.css';
/* 
  Bismillah
"I am the Greatest" - Muhammad Ali
-Uz
 Components To Make: 
  1.Login .. Half-Done ... Full-Done
  2.SignUp .. Half-Done ... Full-Done
  3.Home .. Half-Done ... Full-Done
  4.Dashboard ..Half-Done .. 1/4th Done .. Full Done
  5.Profile .. Half-Done.. Full.
  6.Contact ..Full-Done
  7.Teams ..Full-Done
  8.Your Bookings .. Full-Done
*/



class App extends Component {
  constructor() {
    super();
    this.state = {
      route : 'Login',
      signInEmail : '',
      Username : '',
      team1_name : '',
      team2_name : ''
    }
    this.matchId = '';
    this.userId = '';
    // this.sectionId = [];
    // this.playerID = '';
    // this.seats = 1;
    // this.PayOpt = '';
    this.secAssign = '';
    this.secPrice = '';
  }


AfterSignIn = () => {
  fetch('http://localhost:3001/retrieve',{
    method : 'post',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify({
      email : this.state.signInEmail
    })
  })
  .then(response => response.json())
  .then(data => {
    this.setState({Name : data.name});
    this.setState({Username : data.username});
    this.setState({Email : this.props.signInEmail });
    this.setState({Age : data.age});
    this.setState({Password : data.password});
  })
}

getTeamNames = () => {
  fetch('http://localhost:3001/matchTeams',{
    method : 'post',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify({
      id : this.matchId
    })
  }).then(response => response.json())
  .then(data => {
    console.log(data);
    this.setState({team1_name:data.team1_name});
    this.setState({team2_name:data.team2_name});
  })
}

onRouteChange = (route) => 
{
  this.setState({route: route});
}

onExec = (event) => {
  this.setState({signInEmail: event});
  console.log(this.state.signInEmail);
  this.AfterSignIn();
}

setMatchID = (event) => {
  this.matchId = event;
  console.log('matchID : ',this.matchId);
  this.getTeamNames();
  this.onRouteChange('bookTicket');
}

setSecID = (event) => {
  this.secAssign = event;
  console.log('Section ID : ',this.secAssign)
  this.onRouteChange('BookConfirm');
}

setPrice = (event) => {
  this.secPrice = event;
  console.log('Price : ',this.secPrice);
}

setUserId = (event) => {
  this.userId = event;
  console.log('User id : ',this.userId);
}




decideComponent = (route) => {
  if(this.state.route === 'Home') {
      return(
        <div> 
          <Home onRouteChange={this.onRouteChange} signInEmail={this.state.signInEmail}/>
          <Scroll></Scroll>
          <Footer/>
        </div>
        );
  } else if (this.state.route === 'Login') {
      return <Login onRouteChange={this.onRouteChange} onExec={this.onExec} />
  } else if (this.state.route === 'SignUp') {
      return <SignUp onRouteChange={this.onRouteChange} onExec={this.onExec} />
  } else if (this.state.route === 'Dashboard') {
      return <Dashboard onRouteChange={this.onRouteChange} signInEmail={this.state.signInEmail}/>
  } else if (this.state.route === 'Teams') {
      return <Teams onRouteChange={this.onRouteChange} signInEmail={this.state.signInEmail}/>
  } else if (this.state.route === 'Contact') {
      return <Contact onRouteChange={this.onRouteChange} signInEmail={this.state.signInEmail}/>
  } else if (this.state.route === 'Matches') {
      return <Matches onRouteChange={this.onRouteChange} signInEmail={this.state.signInEmail}/>
  } else if (this.state.route === 'FavPlayer') {
    return <FavPlayer 
            onRouteChange={this.onRouteChange} 
            setMatchID={this.setMatchID} 
            signInEmail={this.state.signInEmail}
          />
  } else if (this.state.route === 'FavTeam') {
    return <FavTeams 
            onRouteChange={this.onRouteChange} 
            setMatchID={this.setMatchID}
            signInEmail={this.state.signInEmail} 
          />
  } else if (this.state.route === 'Bookings') {
    return <Bookings onRouteChange={this.onRouteChange} signInEmail={this.state.signInEmail}/>
  } else if (this.state.route === 'Profile') {
    return <Profile 
            onRouteChange={this.onRouteChange} 
            signInEmail={this.state.signInEmail} 
            
          />
  } else if (this.state.route === 'bookTicket') {
    return <BookTicket
            setSecID = {this.setSecID}
            setPrice = {this.setPrice}
            setUserId = {this.setUserId}
            onRouteChange={this.onRouteChange} 
            matchId={this.matchId} 
            signInEmail={this.state.signInEmail}
            />
  } else if (this.state.route === 'BookConfirm') {
      return <BookConfirm
              team1_name = {this.state.team1_name}
              team2_name = {this.state.team2_name}
              Username = {this.state.Username}
              signInEmail = {this.state.signInEmail}
              secPrice = {this.secPrice}
              matchid = {this.matchId}
              userId = {this.userId}
              secAssign = {this.secAssign} 
              onRouteChange={this.onRouteChange} 
            />
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
