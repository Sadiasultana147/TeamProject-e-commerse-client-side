import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./FurnitureDetails.css";

const FurnitureDetails = () => {
  const { furnitureId } = useParams();
  const [furnitures, setFurniture] = useState([]);

  useEffect(() => {
    fetch(`https://fast-everglades-79425.herokuapp.com/furnitureCollection/${furnitureId}`)
      .then((res) => res.json())
      .then((data) => setFurniture(data));
  }, []);
  return (
    <div style={{ minHeight: "100vh" }} className="detail-container p-5">
      <Link className="mb-4" to="/furnitures">

        <button className="btn btn-info">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          Back To Previuos Page</button>
      </Link>
      <div className="w-100 mx-auto f-detail p-5">

        <div>
          <div className="col ">
            <div className="cardbox d-md-flex align-items-center justify-content-center">
              <div className="col-md-6 col-sm-1 text-center">
                <img
                  src={furnitures.image}
                  alt=""
                  className=" w-100 img-fluid"
                />
              </div>

              <div className="col-md-6">
                <div className="card-body">
                  <h4 className="card-text">{furnitures.name}</h4>
                </div>
                <div className="card-body">
                  <h4 className="card-text">Brand: {furnitures.brand}</h4>
                </div>
                <div className="card-body">
                  <p className="card-text">Detail: {furnitures.feature}</p>
                </div>
                <div className="card-body">
                  <h4 className="card-text">Price: ${furnitures.price}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureDetails;
