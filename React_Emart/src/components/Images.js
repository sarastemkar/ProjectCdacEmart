import Carousel from 'react-bootstrap/Carousel';

function Images() {
  return (
    <div style={{ width: '1500px', margin: '0 auto', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
     <Carousel data-bs-theme="dark" interval={1000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Images/image3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Images/image2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Images/image1.jpg"
            alt="fourth slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Images;
