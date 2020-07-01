import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import {FaFacebookSquare, FaLinkedinIn, FaTwitterSquare, FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
    <div style={{color:"silver"}}>
    <MDBFooter className="font-small pt-3 navbar-dark bg-dark mt-5">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">Esti Administrator</h5>
            <p>
              Faire notre mieux pour vous satisfaire.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Contacts</h5>
            <ul>
              <li className="list-unstyled">
                <Link to="/estiFb"><FaFacebookSquare/> Facebook</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/estiTwitter"><FaTwitterSquare/> Tweet</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/estiLinkedIn"><FaLinkedinIn/> LinkedIn</Link>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Partenariats</h5>
            <ul>
              <li className="list-unstyled">
                <Link to="#!"><FaGem/> Sesam</Link>
              </li>
              <li className="list-unstyled">
                <Link to="#!"><FaStar/> Itescia</Link>
              </li>
              <li className="list-unstyled">
                <Link to="#!"><FaSquare/> Goticom</Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-2" style={{backgroundColor:"black"}}>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> estiAdministrator2020 </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;