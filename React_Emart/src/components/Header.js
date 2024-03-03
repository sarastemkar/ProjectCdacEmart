import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { handleLogout } from '../util/util';
import './header.css';


export function Header() {
  // Initialize navigate hook from react-router-dom
  const navigate = useNavigate();

  // Custom styles
  const customLinkStyle = {
    fontFamily:'Courier New, Courier, monospace',
    fontWeight: '',
    fontSize: '1.5rem',
    color: '#FFF', // Change color to white
    textDecoration: 'none',
    marginRight: '50px',
    cursor: 'pointer',
    
  };

  const logoStyle = {
    marginRight: '10px',
    height: '30px',
  };

  // Render the component
  return (
    <Navbar expand="lg" className="bg-dark"> {/* Change background color to dark */}
      <Container fluid>
        {/* Navbar brand */}
       <Navbar.Brand as={Link} to="/" style={customLinkStyle}>
  <div className="d-flex justify-content-center align-items-center">
    <img src="./Images/logo.png" alt="EMart Logo" style={{ height: 'auto', width: '100px' }} />
  </div>
</Navbar.Brand>



        {/* Navbar toggler */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        {/* Navbar collapse */}
        <Navbar.Collapse id="navbarScroll">
          {/* Left-aligned navigation links */}
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <Link to="" style={{ ...customLinkStyle }}>Home</Link>
            {localStorage.getItem('islogin') ?
              <div style={{ ...customLinkStyle }} onClick={() => { 
                handleLogout();
                navigate('/') }}>
                Logout
              </div>
              :
              
              <Link to="login" style={{ ...customLinkStyle }}>Login</Link>}
              <Link to="/login/register" style={{ ...customLinkStyle }}>Signup</Link>
            <Link to="category" style={{ ...customLinkStyle }}>Category</Link>
            <Link to="/AboutUs" style={{ ...customLinkStyle }}>AboutUs</Link>
          </Nav>
          {/* Right-aligned form */}
          <Form className="d-flex justify-content-center align-items-center ml-auto">
            {localStorage.getItem('islogin') ?
              <Link to="cart" id="b" style={{ ...customLinkStyle }}>
                <img src="/Images/cartlogo.png" alt="Cart" style={{ marginRight: '5px', height: '25px' }} />
                Cart
              </Link>
              : null}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
