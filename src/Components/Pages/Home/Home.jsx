import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BsDashLg } from "react-icons/bs";
import Homeslider from './Homeslider';
import Homebilds from './Homebilds';
import Cards from './Cards';
import Cardsone from './Cardsone';
import Cardstwo from './Cardstwo';
function Home() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch("http://localhost:3004/slider");
        const result = await response.json();
        setData(result);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Carousel data-bs-theme="dark" controls={false} indicators={false}>
                {data.map((elem, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <div className="d-flex justify-content-center">
                                <img className="d-block" src={elem.img} style={{ width: "1172px", height: "450px" }} alt={`Slide ${index + 1}`} />
                            </div>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            <BsDashLg style={{
                margin: "auto", padding: "auto", fontSize: "100px", width: "60px", position: "absolute", left: "50%",color:"E5989B", transform: "translate(-50%, -50%)",marginTop:"50px"
            }} />
            <br />
            <p style={{margin: "auto", padding: "auto", position: "absolute", left: "50%", transform: "translate(-50%, -50%)", marginTop:"50px"}}>دسته های پرطرفدار</p>
            <Homeslider/>
            <Homebilds/>
            <Cards/>
            <Cardsone/>
            <Cardstwo/>
        </div>
    );
}

export default Home;
