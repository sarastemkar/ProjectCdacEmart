import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({
  id,
  imgpath,
  prodName,
  prodDisc,
  prodPoints,
  prodLongDesc,
  prodShortDesc,
  offerPrice,
  mrpPrice
}) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState({
    prodID: "",
    custID: "",
    qty: 1 // Default quantity is 1
  });

  const [showLongDesc, setShowLongDesc] = useState(false);
  

  const handleAddToCart = () => {
    if (localStorage.getItem("islogin") === "true") {
     
     if(!localStorage.getItem("isCardHolder"))
     { // If user is logged in, prepare cart data and send it
      const cartData = {
        prodID: id,
        custID: localStorage.getItem("custId"),
        qty: cart.qty // Use the quantity from state
      };

      // Send cart data to the server
      fetch("http://localhost:5062/api/Cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to add item to cart.");
        }
        alert("Item added to cart successfully.");
      })
      .catch(error => {
        console.error('Error adding item to cart:', error);
        alert("Failed to add item to cart. Please try again.");
      });
    } }else {
      // If user is not logged in, redirect to login page
      navigate('/login');
    }
  };

  const toggleLongDesc = () => {
    setShowLongDesc(!showLongDesc);
  };

  return (
    <div className="card product-card mb-3"> {/* Add margin-bottom to create space between product cards */}
      <img src={"/Images/"+imgpath} alt={prodName} className="card-img-top product-image" />
      <div className="card-body">
        <h5 className="card-title product-name">{prodName}</h5>
        {showLongDesc ? (
          <p className="card-text product-long-desc">{prodLongDesc}</p>
        ) : (
          <p className="card-text product-short-desc">{prodShortDesc}</p>
        )}
        <div className="product-prices">
          <span className="product-mrp-price">MRP - ₹{mrpPrice}</span>
          <span className="product-offer-price">₹{offerPrice}</span>
          {prodPoints !== 0 && <span className='product-offer-price'>Points - {prodPoints}</span>}
        </div>
        {prodLongDesc && (
          <p className="card-text show-more" onClick={toggleLongDesc}>
            {showLongDesc ? 'Show Less' : 'Show More'}
          </p>
        )}
        <div className="product-buttons">
          <button className="btn btn-primary add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  imgpath: PropTypes.string.isRequired,
  prodName: PropTypes.string.isRequired,
  prodLongDesc: PropTypes.string.isRequired,
  prodShortDesc: PropTypes.string.isRequired,
  offerPrice: PropTypes.number.isRequired,
  mrpPrice: PropTypes.number.isRequired
};

export default ProductCard;
