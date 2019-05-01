import React from "react";
// import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  const style = {
    position: 'relative',
    left: '0',
    bottom: '0',
    right: '0',
    width: '100%',
    marginBottom: '-40px'
  }


  return (
    <MDBFooter style={style} color="cyan" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Condition FC</h5>
            <p>
              Software Engineering Project
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Group Members</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Uzair Hussain K163791</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Alishan K163776</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Muzammil Asrar K163769</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Ahsun Asim K163764</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> ConditionFC.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;