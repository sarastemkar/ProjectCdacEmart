import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About eMart</h1>
      <p>Welcome to eMart, your one-stop destination for all your shopping needs!</p>
      <p>At eMart, we strive to provide you with the best online shopping experience, offering a wide range of products at competitive prices.</p>
      <p>Our mission is to make shopping convenient, enjoyable, and affordable for everyone, from electronics to fashion, home goods to groceries, we've got you covered!</p>
      <p>With a user-friendly interface and secure payment options, you can shop with confidence knowing that your satisfaction is our top priority.</p>
      <p>Thank you for choosing eMart. Happy Shopping!</p>
      <div className="founders-section">
        <h2>Meet Our Founders</h2>
        <div className="founder">
          <img src="abc.jpg" alt="Founder 1" />
          <h3>GROUP 7</h3>
          <p>Co-founder & CEO</p>
        </div>
        <div className="founder">
          <img src="def.jpg" alt="Founder 2" />
          <h3>Pongshe sir</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
