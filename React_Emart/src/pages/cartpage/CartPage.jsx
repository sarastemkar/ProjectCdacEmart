import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 2, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 20, quantity: 1, image: "product2.jpg" },
    // Add more products here with their respective images
  ]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  // Calculate total amount whenever cart items change
  useEffect(() => {
    calculateTotalAmount();
  }, [cartItems]);

  const calculateTotalAmount = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(total);
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleRemove = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const renderCartItem = (item) => {
    return (
      <tr key={item.id}>
        <td>
          <img src={require(`./images/${item.image}`).default} alt={item.name} className="product-image" />
        </td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          />
        </td>
        <td>{item.price * item.quantity}</td>
        <td>
          <button className="remove-button" onClick={() => handleRemove(item.id)}>Remove</button>
        </td>
      </tr>
    );
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => renderCartItem(item))}
        </tbody>
      </table>
      <div className="total">
        <p>Total: ${totalAmount}</p>
      </div>
      <div className="place-order">
        <button className="place-order-button">Place Order</button>
      </div>
    </div>
  );
};

export default CartPage;
