import React, { useState, useEffect, useCallback } from 'react';
import { Card } from 'react-bootstrap';
import { BsCart } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import CartSidebar from '../CartSidebar/CartSidebar'; 

const Hairproducts = () => {
  const [currentImages, setCurrentImages] = useState({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);
  const [cartItems, setCartItems] = useState([]); 
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  let navigate = useNavigate();

  const fetchImages = async () => {
    try {
      const response = await fetch("http://localhost:3004/hairproducts");
      if (!response.ok) {
        throw new Error("مشکلی در بارگذاری داده‌ها پیش آمده است.");
      }
      const res = await response.json();
      setImages(res);
      setCurrentImages(res.reduce((acc, image) => {
        acc[image.id] = image.defaultImage;
        return acc;
      }, {}));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleMouseEnter = useCallback((id) => {
    setHoveredItem(id);
    setCurrentImages((prevImages) => ({
      ...prevImages,
      [id]: images.find((image) => image.id === id).hoverImage,
    }));
  }, [images]);

  const handleMouseLeave = useCallback((id) => {
    setHoveredItem(null);
    setCurrentImages((prevImages) => ({
      ...prevImages,
      [id]: images.find((image) => image.id === id).defaultImage,
    }));
  }, [images]);

  const toggleAktiv = (id) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id],
    }));
  };

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => {
      const updatedCart = [...prevCartItems, item];
      const updatedTotalPrice = prevCartItems.reduce((total, item) => total + item.price, item.price);
      setTotalPrice(updatedTotalPrice);
      return updatedCart;
    });
    setShowCartSidebar(true); 
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevCartItems) => {
      const updatedCart = prevCartItems.filter(item => item.id !== id);
      const updatedTotalPrice = updatedCart.reduce((total, item) => total + item.price, 0);
      setTotalPrice(updatedTotalPrice);
      return updatedCart;
    });
  };

  const handleCloseCartSidebar = () => {
    setShowCartSidebar(false);
  };

  if (error) {
    return <div>خطا: {error}</div>;
  }

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  return (
    <div style={{ direction: "rtl" }}>
      {showCartSidebar && <CartSidebar cartItems={cartItems} totalPrice={totalPrice} onRemoveFromCart={handleRemoveFromCart} onClose={handleCloseCartSidebar} />}
      <div style={{ direction: 'rtl' }}>
        <p><span style={{ color: '#adb5bd', marginRight: "150px" }}>خانه </span>/    محصولات مو</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '50px' }}>
        {images.map((elem) => (
          <div key={elem.id} style={{ marginBottom: "20px" }}>
            <Card
              style={{ width: '18rem', margin: '10px', position: 'relative', border: 'none' }}
              onMouseEnter={() => handleMouseEnter(elem.id)}
              onMouseLeave={() => handleMouseLeave(elem.id)}
            >
              <Card.Img variant="top" src={currentImages[elem.id]} />
              <Card.Body>
                <Card.Title style={{textAlign:"center"}}>{elem.title}</Card.Title>
                <Card.Text>
                  <div className='d-flex' style={{ direction: "rtl", marginRight: "35px", textAlign:"center" }}>
                    <div style={{ color: "#adb5bd" }}>
                      <del>{elem.discountPrice}</del>
                    </div>
                    <div className="card-text mx-3" style={{ color: '#E5989B', fontSize: "18px" }}>
                      {elem.price}
                    </div>
                  </div>
                </Card.Text>
              </Card.Body>
              <div style={{
                position: 'absolute',
                bottom: '-18px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}>
                <div
                  onClick={() => toggleAktiv(elem.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30%',
                    opacity: hoveredItem === elem.id ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  {checkedItems[elem.id] ? <FaCheck size={20} style={{ marginTop: "3px" }} /> : <IoMdHeartEmpty size={20} style={{ marginTop: "3px" }} />}
                </div>
                <div
                  onClick={() => handleAddToCart(elem)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40%',
                    opacity: hoveredItem === elem.id ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <BsCart
                    size={70}
                    color="white"
                    style={{
                      border: "2px solid #25a244",
                      backgroundColor: "#25a244",
                      padding: "5px 8px",
                      borderRadius: "5px",
                      width: "75px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '30%',
                    opacity: hoveredItem === elem.id ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <IoSearchOutline size={20} onClick={() => navigate(`/محصولات مو/${elem.title}`)} style={{ marginTop: "3px" }} />
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hairproducts;
