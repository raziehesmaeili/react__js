import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoCheckmark } from "react-icons/io5";
import Counter from "../Counter/Counter";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaCheck } from "react-icons/fa"; 
import { FaFacebookF } from "react-icons/fa";
import { BiLogoPinterest } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaTelegram } from "react-icons/fa";
const BoostersShow = () => {
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [checkedItems, setCheckedItems] = useState(false); 

    useEffect(() => {
        const fetchdata2 = async () => {
            try {
                const response = await fetch("http://localhost:3004/boosters");
                const res = await response.json();
                const useItem = res.find((elem) => elem.title === id);
                console.log("Product data:", useItem);
                if (useItem) {
                    setInfo(useItem);
                } else {
                    setError("محصول یافت نشد.");
                }
            } catch (err) {
                setError("مشکلی در بارگذاری داده‌ها پیش آمده است.");
            } finally {
                setLoading(false);
            }
        };

        fetchdata2();
    }, [id]);

    const toggleAktiv = () => {
        setCheckedItems(!checkedItems); 
    };

    if (loading) {
        return <div>در حال بارگذاری...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        info && (
            <div key={info.id} style={{ direction: "rtl", marginTop: "30px", marginBottom: "22px" }}>
                <div className="d-flex">
                    <img src={info.defaultImage} alt={info.title} style={{ marginRight: "160px" }} />
                    <div style={{ marginRight: "35px" }}>
                        <p>
                            <span style={{ color: "#adb5bd" }}>خانه</span>/<span style={{ color: "#adb5bd" }}>تقویت کننده ها</span>/{info.title}
                        </p>
                        <h5>{info.title}</h5>
                        <div className="d-flex" style={{ direction: "rtl", textAlign: "center", fontSize: "20px", marginTop: "10px" }}>
                            <div style={{ color: "#adb5bd" }}>
                                <del>{info.discountPrice}</del>
                            </div>
                            <div className="card-text mx-3" style={{ color: '#E5989B', fontSize: "20px" }}>
                                {info.price}
                            </div>
                        </div>
                        <div style={{ marginTop: "22px" }}>
                            <h5>ویژگی ها :</h5>
                            <div>{info.text}</div>
                        </div>
                        <div style={{ marginTop: "22px", display: "flex" }}><h5>حجم  :  </h5>{info.size}</div>
                        <div style={{ marginTop: "22px", display: "flex" }}><h5>کشور مبدا برند  :  </h5>{info.country}</div>
                        <div><IoCheckmark style={{ color: "#E5989B" }} />موجود</div>
                        <Counter />
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '-18px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                justifyContent: 'center',
                                width: '30%',
                              
                            }} 
                            onClick={toggleAktiv}
                        >
                            {checkedItems ? (
                                <FaCheck size={20} style={{marginRight: '230px' }} />
                            ) : (
                                <IoMdHeartEmpty size={20} style={{ marginRight: '230px' }} />
                            )}نمایش لیست علاقمندی
                        </div>
                        <div style={{marginTop:"10px"}}>اشتراک گذاری : <span style={{color:"#adb5bd"}}><FaFacebookF /><BiLogoPinterest style={{fontSize:"20px"}} /><TiSocialLinkedin  style={{fontSize:"25px"}}/><FaTelegram /></span></div>
                    </div>
                </div>
            </div>
        )
    );
};

export default BoostersShow;
