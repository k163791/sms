import React from "react";
import { withAlert } from 'react-alert';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdbreact';
class SignUp extends React.Component{
  constructor(props) {
      super();
      this.style = {
      position : 'absolute',
      top : '15%',
      left : '30%'
    }

    this.state = {
      signinUsername: '',
      signinPassword: '',
      signinAge: '',
      signinName: '',
      signinEmail: ''
    }
  }
  

  onUsernameChange = (event) => {
    this.setState({signinUsername: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signinPassword: event.target.value})
  }

  onAgeChange = (event) => {
    this.setState({signinAge: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({signinEmail: event.target.value})
  }

  onNameChange = (event) => {
    this.setState({signinName: event.target.value})
  }

  onSubmitSignin = () => {
    fetch('http://localhost:3001/register',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username : this.state.signinUsername,
        name : this.state.signinName,
        email : this.state.signinEmail,
        password : this.state.signinPassword,
        age : this.state.signinAge
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data === `Couldn't Register`) {
          this.props.alert.show(`Email already Registered`);
          // this.props.onRouteChange('SignUp');
        }
        else {
          this.props.onRouteChange('Home');
          this.props.onExec(this.state.signinEmail);
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
                <h3 className="pink-text mb-5">
                  <strong>Sign up</strong>
                </h3>
              </div>
              <MDBInput onChange={this.onUsernameChange} label="Username" group type="text" validate/>
              <MDBInput onChange={this.onNameChange} label="Name" group type="text" validate />
              <MDBInput onChange={this.onEmailChange} label="Email" group type="text" validate />
              <MDBInput onChange={this.onPasswordChange} label="Password" group type="password" validate />
              <MDBInput onChange={this.onAgeChange} label="age" group type="integer" validate />
              <div className="md-form pb-3">
                <div className="form-check my-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="defaultCheck12"
                  />
                  <label htmlFor="defaultCheck12" className="grey-text">
                    Accept the
                    <a href="#!" className="blue-text">

                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <MDBRow className="d-flex align-items-center mb-4">
                <MDBCol md="6" className="text-center">
                  <button
                    onClick = {this.onSubmitSignin}
                    // onClick={()=>this.props.onRouteChange('Home')}
                    type="button"
                    className="btn btn-pink btn-block btn-rounded z-depth-1"
                  >
                    Sign up
                  </button>
                </MDBCol>
                <MDBCol md="6">
                  <p className="font-small grey-text d-flex justify-content-end">
                    Have an account?
                    <a onClick={()=>this.props.onRouteChange('Login')} href="#!" className="blue-text ml-1">

                      Log in
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
            <div className="footer pt-3 mdb-color lighten-3">
              <MDBRow className="d-flex justify-content-center">
                <p className="font-small white-text mb-2 pt-3">
                  or Sign up with:
                </p>
              </MDBRow>
              <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                  <MDBIcon icon="facebook-f" fab size="lg" className="white-text"> </MDBIcon>
                </a>
                <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                  <MDBIcon className="fab fa-twitter white-text fa-lg"> </MDBIcon>
                </a>
                <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                  <MDBIcon className="fab fa-google-plus-g white-text fa-lg"> </MDBIcon>
                </a>
              </MDBRow>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

};

export default withAlert()(SignUp);

