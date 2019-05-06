import React from "react";
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Scroll from '../Scroll/Scroll';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

class Contact extends React.Component /*= ({onRouteChange}) =>*/ {

constructor(props) {
  super();
  this.state = {
    Fname : '',
    Femail:'',
    Fmessage:''
  }
}


onNameChange = (event) => {
  this.setState({Fname:event.target.value});
}

onEmailChange = (event) => {
  this.setState({Femail:event.target.value});
}

onMessageChange = (event) => {
  this.setState({Fmessage:event.target.value});
}

onSubmitMessage = () => {
  fetch('http://localhost:3001/contact',{
    method : 'post',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify({
      name : this.state.Fname,
      email : this.state.Femail,
      message : this.state.Fmessage
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
}
  
render() {
  return (
    <div>
      <div>
        <Home onRouteChange={this.props.onRouteChange} signInEmail={this.props.signInEmail}/>
      </div>
    <div style={{
    position : 'relative',
    left : '0',
    margin : '0',
    border : '0',
    padding : '0'
    }}>
    <Scroll>
    <MDBContainer >
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form >
                <p className="h4 text-center py-4">Contact Us</p>
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Your name
                </label>
                <input
                  onChange={this.onNameChange}
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  value={this.props.signInEmail}
                />
                <br />
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                >
                  Your email
                </label>
                <input
                  onChange={this.onEmailChange}
                  type="email"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                  value={this.props.signInEmail}
                />
                <br />
                <label
                  htmlFor="defaultFormContactMessageEx"
                  className="grey-text"
                >
                  Your message
                </label>
                <textarea
                  onChange={this.onMessageChange}
                  type="text"
                  id="defaultFormContactMessageEx"
                  className="form-control"
                  rows="3"
                />
                <div className="text-center py-4 mt-3">
                  <MDBBtn 
                    className="btn btn-outline-purple" 
                    type="submit"
                    onClick={this.onSubmitMessage}
                    >
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </Scroll>
    </div>
    <div>
    <Footer />
    </div>
  </div>
  );
}
  
};

export default Contact;