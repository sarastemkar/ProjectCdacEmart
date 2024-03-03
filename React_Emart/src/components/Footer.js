import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto"> {/* Use mt-auto to push footer to the bottom */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="col-md-6 text-md-right">
            <h5>Follow Us</h5>
            <p>Connect with us on social media</p>
            <div className="social-icons">
              <a href="#" className="mr-2"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="mr-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="mr-2"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
