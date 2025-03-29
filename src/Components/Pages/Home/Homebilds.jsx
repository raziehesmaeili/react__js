import { useEffect, useState } from "react";

const Homebilds = () => {
    let [data, setdata] = useState([])
    const datafetch = async () => {
        const data1 = await fetch("http://localhost:3004/Homebilds")
        const res = await data1.json()
        setdata(res)
    }
    useEffect(()=>{
        datafetch()
    },[])
    return (
        <div style={{marginLeft:"100px",marginTop:"40px"}}>
            {data.map((elem)=>{
               return(
                <div key={elem.id}>

                    <img src={elem.img}   alt="Image" style={{width:"1280px",height:"533px",marginTop:"20px"}}/>
                </div>
               )
            })}
        </div>
    );
}

export default Homebilds;