import React from 'react';
// import Scroll from '../Scroll/Scroll';
import { Navbar,Nav,NavDropdown } from "react-bootstrap";
const Home = ({ onRouteChange }) => {
  const style = {
    display : 'flex',
    justifyContent : 'left',
    color : 'white',
    margin : '0',
    border : '0',
    padding : '0'
  }

  const style1 = {
    paddingBottom : '15px'
  }
  
  return(
    <div>
    <div style={style}>
      <h1>Condition FC</h1>
    </div>
    <div style={style1}>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand onClick={()=>onRouteChange('Home')} href="#home">Condition FC</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link onClick={()=>onRouteChange('Home')} href="#home">Home</Nav.Link>
      <Nav.Link onClick={()=>onRouteChange('Teams')} href="#teams">Teams</Nav.Link>
      <Nav.Link onClick={()=>onRouteChange('Matches')} href="#matches">Matches</Nav.Link>
      <Nav.Link onClick={()=>onRouteChange('Contact')} href="#contact">Contact</Nav.Link>
    </Nav>
     <NavDropdown title="User" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={()=>onRouteChange('Profile')} href="#action/3.1">Profile</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>onRouteChange('Dashboard')} href="#action/3.2">Dashboard</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={()=>onRouteChange('Login')} href="#action/3.4">Logout</NavDropdown.Item>
      </NavDropdown>
  </Navbar>
  </div>
  </div>
  );
}

export default Home;
