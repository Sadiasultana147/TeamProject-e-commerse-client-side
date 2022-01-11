import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./SportDetails.css";

const SportDetails = () => {
  const { sportId } = useParams();
  const [sports, setSport] = useState([]);

  useEffect(() => {
    fetch(`https://fast-everglades-79425.herokuapp.com/sportCollection/${sportId}`)
      .then((res) => res.json())
      .then((data) => setSport(data));
  }, []);
  return (
    <div style={{ minHeight: "100vh" }} className="detail-container p-5">
      <Link to="/sports">

        <button className="btn btn-info mt-4 ">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          Back To Previuos Page</button>
      </Link>
      <div className="w-75 mx-auto p-5 sports-box">
        <div>
          <div className="col ">
            <div className="cardbox d-md-flex align-items-center justify-content-center">
              <div className="col-md-6 text-center">
                <img src={sports.image} alt="" className=" w-100 img-fluid" />
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <h4 className="card-text">{sports.name}</h4>
                </div>
                <div className="card-body">
                  <h4 className="card-text">Brand: {sports.brand}</h4>
                </div>
                <div className="card-body">
                  <p className="card-text">Detail: {sports.feature}</p>
                </div>
                <div className="card-body">
                  <h4 className="card-text">Price: ${sports.price}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportDetails;
