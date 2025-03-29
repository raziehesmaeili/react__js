import React, { useEffect, useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; 

function Cards() {
  let [data, setData] = useState([]);
  let [cartMessage, setCartMessage] = useState('');

  const fetchData = async () => {
    try {
      const data1 = await fetch("http://localhost:3004/Bestseller"); 
      const res = await data1.json();
      setData(res);
    } catch (error) {
      console.error("خطا در بارگذاری داده‌ها:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

 
  const slideItems = (data, slideSize) => {
    const result = [];
    for (let i = 0; i < data.length; i += slideSize) {
      result.push(data.slice(i, i + slideSize));
    }
    return result;
  };

  const slides = slideItems(data, 4); 

 
  const handleAddToCart = () => {
    setCartMessage('یک محصول به سبد خرید اضافه شد!');
    setTimeout(() => {
      setCartMessage('');
    }, 3000);
  };

  return (
    <div className="carousel-container" style={{ paddingTop: '50px', paddingBottom: '100px', margin: "70px", backgroundColor: "#ffddd2" }}>
      <h4 style={{ textAlign: "center" }}>پرفروش ترین های ملشاین</h4>
      
   
      {cartMessage && <div className="cart-message" style={{ textAlign: 'center', fontSize: '18px', color: 'green', marginBottom: '20px' }}>
        {cartMessage}
      </div>}
      
      <Carousel data-bs-theme="white" interval={3000}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex" style={{ marginLeft: "40px" }}>
              {slide.map((elem) => (
                <Card key={elem.id} style={{
                  width: '18rem',
                  margin: '20px',
                  padding: '60px',
                  borderRadius: '10px',
                  border: "none",
                  padding: '5px',
                  position: 'relative', 
                  overflow: 'hidden', 
                  transition: 'transform 0.3s ease-in-out',
                }}>
                  <Card.Img
                    variant="top"
                    src={elem.img || "https://via.placeholder.com/150?text=Product"} 
                    style={{ padding: "10px" }}
                  />
             
                  <div className="icons" style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}>
                    <div className="icon heart-icon" style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      color: 'white',
                      fontSize: '24px',
                      padding: '10px',
                      borderRadius: '50%',
                      marginBottom: '10px',
                      cursor: 'pointer',
                    }}>
                      <FaHeart />
                    </div>
                    <div className="icon cart-icon" 
                      onClick={handleAddToCart} 
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        fontSize: '24px',
                        padding: '10px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                      }}
                    >
                      <FaShoppingCart />
                    </div>
                  </div>
                  <Card.Body style={{textAlign:"center"}}>
                    <Card.Title style={{fontSize:"15px"}}>{elem.title}</Card.Title>
                    <Card.Text>
                      <div className='d-flex' style={{ direction: "rtl", marginRight: "35px" }}>
                        <div style={{ color: "#adb5bd" }}>
                          <del>{elem.discountPrice}</del>
                        </div>
                        <div className="card-text mx-3" style={{ color: '#E5989B', fontSize: "15px" }}>
                          {elem.price}
                        </div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Cards;
