import { AiOutlineUser } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import img from "../Images/1.jpeg";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const focusinput = useRef()
    const navigate = useNavigate()
    const clickhandler=()=>{
        navigate('/user-menu')
    }
    useEffect(()=>{
        focusinput.current.focus()
    })
    return (
        <div style={{ display: "flex", alignItems: "center", padding: "10px", justifyContent: "space-between" }}>
            <AiOutlineUser size={30} style={{ cursor: "pointer" }} onClick={clickhandler} />

            <div style={{ display: "flex", alignItems: "center" }}>
                <IoSearch size={40} style={{ position: "absolute", left: "60px", color: "#333", border: "1px solid #E5989B ", padding: "7px", color: "white", backgroundColor: "#E5989B" }} />
                <input
                    ref={focusinput}
                    type="text"
                    placeholder="جستجوی محصولات"
                    style={{
                        direction: "rtl",
                        width: "1300px",
                        height: "40px",
                        padding: "10px",
                        position: "absolute",
                        right: '120px',
                        borderRadius: "5px",
                        border: "1px solid #ddd",
                        fontSize: "16px",
                        color:"#adb5bd"
                    }}
                />
            </div>

            <img src={img} alt="Logo" style={{ width: "130px", height: "130px", borderRadius: "5px", objectFit: "cover" }} />
        </div>
    );
};

export default Menu;
