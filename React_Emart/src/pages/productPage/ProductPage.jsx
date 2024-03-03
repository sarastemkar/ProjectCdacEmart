import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [isCardholder, setIsCardholder] = useState(false);
  const {id} = useParams();
  
  useEffect(() => {
    // Fetch products
    fetch(`http://localhost:5062/api/Product/ByCategory/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log fetched data
        setProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error)); // Log any errors
    
    // Check if the customer is a cardholder (assuming you have this logic)
    // Example logic: setIsCardholder(true) if the customer is a cardholder, otherwise setIsCardholder(false)
  }, [id]);

  return (
    <div style={{ margin: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {Array.isArray(products) && products.map(product => {
        return (
          <div key={product.prodID} style={{ marginBottom: '20px' }}>
            <ProductCard
              id={product.prodID}
              prodName={product.prodName}
              prodShortDesc={product.prodShortDesc}
              prodLongDesc={product.prodLongDesc}
              offerPrice={product.offerPrice}
              mrpPrice={product.mrpPrice}
              pointsRedeem={product.pointsRedeem}
              imgpath={product.imgPath}
              isCardholder={isCardholder}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductPage;
