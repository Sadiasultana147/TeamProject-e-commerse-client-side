import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Fashion.css";
import useAuth from "../../../Hook/useAuth"

const Fashion = (props) => {
  const { _id, name, image, price, feature } = props.fashion;
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
      <div className="col">
        <div
          style={{ backgroundColor: "rgb(200,235,241)" }}
          className="cardbox fashion-card w-100 mx-auto"
        >
          <div className="card-body text-center">
            <h5 className="card-text">{name}</h5>
          </div>
          <div className="text-center">
            <img src={image} alt="" className="fashion-img img-fluid p-2" />
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
                to={`fashiondetails/${_id}`}
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
                to={`fashionsOrder/${_id}`}
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
                to={`fashiondetails/${_id}`}
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

export default Fashion;
