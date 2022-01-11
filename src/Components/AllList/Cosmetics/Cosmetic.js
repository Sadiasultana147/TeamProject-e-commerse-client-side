import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cosmetic.css";
import useAuth from "../../../Hook/useAuth";

const Cosmetic = (props) => {
  const { _id, name, image, brand, price, feature } = props.cosmetic;
  const { user, isAdmin, setIsAdmin, isLoding, setIsLoading } = useAuth();
  const { handleDelete } = props;
  useEffect(() => {
    fetch(`https://fast-everglades-79425.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data[0]?.role === "admin") {
          setIsAdmin("admin");
        } else {
          setIsAdmin("user");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user?.email]);

  return (
    <div className="electronic-container">
      <div className="d-flex">
        <div
          style={{ backgroundColor: "rgb(200,235,241)" }}
          className="col-md-7 col-sm-1 cardbox card collection-card border-0"
        >
          <div className="text-center">
            <img src={image} alt="" className="collection-img p-3" />
          </div>
          {isAdmin === "admin" && (
            <div className="card-footer bg-transparent border-0 d-flex justify-content-between p-3 e-btn">
              <Link
                style={{ textDecoration: "none" }}
                className="link d-flex justify-content-center"
              >
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-danger"
                >

                  <span className="ps-1"> DELETE</span>
                </button>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className="link d-flex justify-content-center"
                to={`cosmeticdetails/${_id}`}
              >
                <button className="btn btn-info ">

                  <span className="ps-1">Details</span>
                </button>
              </Link>
            </div>
          )}
          {isAdmin === "user" && (
            <div className="card-footer bg-transparent border-0 d-flex justify-content-between p-3 e-btn">
              <Link
                style={{ textDecoration: "none" }}
                className="link d-flex justify-content-center"
                to={`cosmeticOrder/${_id}`}
              >
                <button className="btn btn-success ">
                  <i
                    style={{ color: "red", fontSize: "20px" }}
                    class="fa fa-cart-plus"
                  ></i>
                  <span className="ps-1"> ORDER</span>
                </button>
              </Link>

              <Link
                style={{ textDecoration: "none" }}
                className="link d-flex justify-content-center"
                to={`cosmeticdetails/${_id}`}
              >
                <button className="btn btn-info ">

                  <span className="ps-1">Details</span>
                </button>
              </Link>
            </div>
          )}
        </div>

        <div
          className="col-md-5 col-sm-1 card cardbox collection-card border-0 justify-content-center"
          style={{ backgroundColor: "rgb(200,235,241)" }}
        >
          <div>
            <h4 className="card-text ps-2">{name}</h4>
            <p className="card-text ps-2">Brand: {brand}</p>
            <p className="card-text ps-2">Price: ${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cosmetic;
