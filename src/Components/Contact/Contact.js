import React from "react";
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Scroll from '../Scroll/Scroll';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

const Contact = ({onRouteChange}) => {
  const style = {
    position : 'relative',
    left : '0',
    margin : '0',
    border : '0',
    padding : '0'
  }

  return (
    <div>
      <div>
        <Home onRouteChange={onRouteChange}/>
      </div>
    <div style={style}>
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
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormContactMessageEx"
                  className="grey-text"
                >
                  Your message
                </label>
                <textarea
                  type="text"
                  id="defaultFormContactMessageEx"
                  className="form-control"
                  rows="3"
                />
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-purple" type="submit">
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
};

export default Contact;