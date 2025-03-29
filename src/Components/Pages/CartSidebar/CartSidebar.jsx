import React from 'react';
import { RxCross1 } from "react-icons/rx";

const CartSidebar = ({ cartItems, totalPrice, onRemoveFromCart, onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      left: '0',
      top: '0',
      width: '350px',
      height: '100%',
      backgroundColor: '#fff',
      boxShadow: '4px 0 6px rgba(0, 0, 0, 0.1)',
      zIndex: 999,
      overflowY: 'auto',
      padding: '20px',
      transition: 'transform 0.3s ease',
    }}>
      <div>
        <h4>سبد خرید</h4>
        <button onClick={onClose} className='d-flex' style={{
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          marginTop: "-40px"
        }}>
          <RxCross1 size={15} style={{ cursor: 'pointer', marginTop: "10px", marginRight: "260px" }} /> بستن
        </button>
      </div>
      <hr />
      {cartItems.map((item, index) => (
        <div key={index} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <img src={item.defaultImage} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'cover', marginBottom: "25px" }} />
          <div style={{ flex: 1 }}>
            <h6 style={{ marginRight: "15px" }}>{item.title}</h6>
            <p style={{ color: "#E5989B", marginRight: "15px" }}>{item.price}</p>
            <hr />
          </div>
          <RxCross1
            onClick={() => onRemoveFromCart(item.id)}
            size={15}
            style={{ cursor: 'pointer', color: '#adb5bd', marginBottom: "55px" }}
          />
        </div>
      ))}
      <div style={{ fontSize: '18px', fontWeight: 'bold', position: 'fixed', bottom: "0", borderLeft: "20px" }}>
        <hr />
        <p>جمع جزء: <span style={{ color: "#E5989B", marginRight: "150px" }}>{totalPrice}</span></p>
        <button style={{ color: "white", backgroundColor: "#38b000", marginBottom: "10px" }} className='btn w-100'>تسویه حساب</button>
      </div>
    </div>
  );
};

export default CartSidebar;
