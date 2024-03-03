import React, { useEffect, useState } from 'react';
import Images from '../../components/Images';
import ItemCard from '../../components/ItemCard';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard'; // Make sure to import ProductCard


function Home() {
  const navigate = useNavigate();
  const [maincategories, setMaincategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5062/api/Category/getCatNameByParentId/0')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        return response.json();
      })
      .then(data => {
        setMaincategories(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle error gracefully (e.g., display an error message)
      });
  }, []); // Empty dependency array means this effect runs only once on mount

  const handleClick = (id, flag) => {
    console.log('i-', flag);
    console.log('i-', id);
    if (flag) {
      navigate(`/s/${id}`);
    } else {
      navigate(`/p/${id}`);
    }
  };

  const products = [
    { id: 1, name: 'Canon', image: '/canon.jpg' },
    { id: 2, name: 'Samsung', image: '/samsung.jpg' },
    // Add more products as needed
  ];
  
  
  return (
    <div>
      <Images />
      
      <div style={{ margin: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {maincategories?.map(i => (
          <div key={i.catmasterID} onClick={() => handleClick(i.catmasterID, i.childflag)}>
            <ItemCard title={i.categoryName} img={i.catImgPath} />

            
          </div>
        ))}
      </div>

      <div>
      <h2>Offers</h2>
      <img src="./books1.jpg" alt="canon image" />
      </div>
    </div>
  );
}

export default Home;
