import React from "react";
import { withAlert } from 'react-alert';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

class Login extends React.Component {
constructor(props) {
  super();
  this.style = {
    position : 'absolute',
    top : '10%',
    left : '25%'
  }

  this.state = {
    signInEmail : '',
    signInPassword: '',
  }
}

  
onEmailChange = (event) => {
  this.setState({signInEmail: event.target.value})
}

onPasswordChange = (event) => {
  this.setState({signInPassword: event.target.value})
}

onSubmitSignin = () => {
  // const alert = useAlert();
  fetch('http://localhost:3001/signin', {
    method:'post',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify({
      email : this.state.signInEmail,
      password : this.state.signInPassword
    })
  })
  .then(response => response.json())
  .then(data => {
    if(data === `Couldn't Signin`) {
      this.props.alert.show('Incorrect Username or Password'); 
    } else {
      this.props.onRouteChange('Home');
      this.props.onExec(this.state.signInEmail);
    }
  })
}

render() {

  return (
    <MDBContainer style={this.style}>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              <MDBInput
                onChange={this.onEmailChange}
                label="Email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                onChange={this.onPasswordChange}
                label="Password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="blue-text ml-1">

                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  onClick={this.onSubmitSignin}
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign in
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a onClick={()=> this.props.onRouteChange('SignUp')} href="#!" className="blue-text ml-1">

                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
};

export default withAlert()(Login);