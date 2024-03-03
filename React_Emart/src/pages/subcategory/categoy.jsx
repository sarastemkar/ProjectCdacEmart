import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch categories from API when component mounts
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:5062/api/Category');
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }
      const data = await response.json();
      // Filter categories where parentCatID is 0
      const mainCategories = data.filter(category => category.parentCatID === 0);
      setCategories(mainCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCategoryClick = (categoryId) => {
    // Redirect to subcategories page with the selected category ID
    navigate(`/subcategories/${categoryId}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Main Categories</h2>
      <div className="row">
        {categories.map(category => (
          <div key={category.catmasterID} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card" onClick={() => handleCategoryClick(category.catmasterID)}>
              <img src={"Images/"+category.catImgPath} className="card-img-top" alt={category.categoryName} />
              <div className="card-body">
                <h5 className="card-title">{category.categoryName}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
