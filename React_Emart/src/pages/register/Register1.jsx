import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import './register1.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    custName: '',
    custAddress: '',
    custPhone: '',
    custEmail: '',
    custPassword: '',
    cardHolder: false,
    points: 0,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5062/api/Customer', formData);
      console.log(response.data);
      window.alert('Registration successful!'); 
     
    } catch (error) {
      console.error('Error:', error);
     
    }
  };

  return (
    <div className='register'>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="custName"
            value={formData.custName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="custAddress"
            value={formData.custAddress}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            name="custPhone"
            value={formData.custPhone}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="custEmail"
            value={formData.custEmail}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="custPassword"
            value={formData.custPassword}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Card Holder:
          <input
            type="checkbox"
            name="cardHolder"
            checked={formData.cardHolder}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
