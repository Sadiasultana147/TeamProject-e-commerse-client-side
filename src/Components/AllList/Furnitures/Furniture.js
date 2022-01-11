import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import "./Furniture.css";

const Furniture = (props) => {
  const { _id, name, image, brand, price, feature } = props.furniture;
  const { handleDelete } = props;
  const { user, isAdmin, setIsAdmin, isLoding, setIsLoading } = useAuth()
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
    <div>
      <div className="col h-100">
        <div
          style={{ backgroundColor: "rgb(200,235,241)" }}
          className="cardbox w-100 card furniture-card"
        >
          <div className="card-body text-center mt-2">
            <h4 className="card-text">{name}</h4>
          </div>
          <div>
            <img
              src={image}
              alt=""
              className="w-100 p-5 img-fluid furniture-img"
            />
          </div>
          {
            isAdmin === "admin" &&
            <div className="card-footer bg-transparent border-0 d-flex justify-content-between p-3">
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
                to={`furnituredetails/${_id}`}
              >
                <button className="btn btn-info ">

                  <span className="ps-1">Details</span>
                </button>
              </Link>
            </div>
          }
          {isAdmin === "user" &&
            <div className="card-footer bg-transparent border-0 d-flex justify-content-between p-3">

              <Link
                style={{ textDecoration: "none" }}
                className="link d-flex justify-content-center"
                to={`furnitureOrder/${_id}`}
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
                to={`furnituredetails/${_id}`}
              >
                <button className="btn btn-info ">

                  <span className="ps-1">Details</span>
                </button>
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Furniture;
