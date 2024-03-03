import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemCard from '../../components/ItemCard';
import Images from '../../components/Images';

const SubCategory = () => {
  const { id } = useParams(); // Extract the category ID from URL parameters
  const navigate = useNavigate(); // Navigation hook

  const [subcategories, setSubcategories] = useState([]); // State to store subcategories

  // Function to handle click event on subcategory card
  const handleClick = (categoryId) => {
    // Navigate to the products page for the clicked subcategory
    navigate(`/products/${categoryId}`);
  };

  // Fetch subcategories from the API based on the parent category ID
  useEffect(() => {
    fetch(`http://localhost:5062/api/Category/parent/${id}`)
      .then(response => response.json())
      .then(data => {
        setSubcategories(data); // Update state with fetched subcategories
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]); // Execute this effect when the category ID changes

  return (
    <div>
   

      <div style={{ margin: '20px', display: 'flex', padding: '2%' }}>
        {subcategories.map(subcategory => (
          <div key={subcategory.catmasterID} onClick={() => handleClick(subcategory.catmasterID)} style={{ padding: '5px' }}>
            <ItemCard title={subcategory.categoryName} img={"/Images/"+subcategory.catImgPath} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
