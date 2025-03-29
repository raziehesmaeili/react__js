import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Homeslider = () => {
  let [data, setdata] = useState([]);

  const fetchdata = async () => {
    try {
      const data1 = await fetch("http://localhost:3004/homeslider");
      if (!data1.ok) {
        throw new Error("Network response was not ok");
      }
      const res = await data1.json();
      setdata(res);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div
      className="homeslider-container d-flex flex-row-reverse"
      style={{ marginTop: "100px", marginRight: "150px", flexWrap: 'wrap' }}
    >
      {data.map((elem) => {
        return (
          <div
            key={elem.id}
            className="homeslider-item d-flex flex-column align-items-center mx-4"
          >
            <Link to={elem.link}>
              <img
                style={{ width: '200px', height: '200px' }}
                src={elem.img}
                alt={elem.title}
              />
            </Link>
            <p style={{ marginTop: '10px', textAlign: 'center' }}>
              {elem.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Homeslider;
