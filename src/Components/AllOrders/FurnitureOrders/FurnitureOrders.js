import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";

const FurnitureOrders = () => {
  const { _id } = useParams();
  const [furnitures, setFurnitures] = useState({});

  const { user } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/myOrders";

  const cityRef = useRef();
  const addressRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    fetch(`https://fast-everglades-79425.herokuapp.com/furnitureCollection/${_id}`)
      .then((res) => res.json())
      .then((data) => setFurnitures(data));
  }, []);

  const handleOrder = (e) => {
    const UserName = user.displayName;

    const userEmail = user.email;
    const city = cityRef.current.value;
    const address = addressRef.current.value;
    const contact = contactRef.current.value;
    const productName = furnitures.name;
    const productImage = furnitures.image;
    const productDetails = furnitures.features;
    const price = furnitures.price;

    const newOrder = {
      productName,
      productImage,
      productDetails,
      price,
      city,
      address,
      contact,
      UserName,
      userEmail,
    };
    fetch("https://fast-everglades-79425.herokuapp.com/orderCollection", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setFurnitures(data);
          Swal.fire({
            title: " Successfully Ordered",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });

          e.target.reset();
        }
        history.push(url);
      });

    e.preventDefault();
  };
  return (

    <div
      className="p-5"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(to right bottom, #6db6c3, #70a8ba, #739baf, #748ea1, #748192, #6a7585, #616979, #575d6c, #454e60, #334055, #203349, #08263e)",
      }}
    >
      <Link className="mb-4" to="/furnitures">

        <button className="btn btn-info">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          Back To Previuos Page</button>
      </Link>
      <div className="d-flex m-5">


        <div className="col-md-6 text-center">
          <h2>{furnitures?.name}</h2>
          <div>
            <img src={furnitures?.image} alt="" className="w-100 p-5" />
          </div>
        </div>

        <div className="col-md-6 text-center">
          <h2>Place Your Order</h2>
          <div className="justify-content-center my-5">
            <form
              onSubmit={handleOrder}
              className="d-flex flex-column w-75 mx-auto"
            >
              <input className="p-2" value={user.displayName} />

              <input className="p-2 mt-3" value={user.email} />
              <input
                className="p-2 mt-3"
                ref={cityRef}
                type="text"
                placeholder="City"
                required
              />
              <input
                className="p-2 mt-3"
                ref={addressRef}
                type="text"
                placeholder="Address"
                required
              />
              <input
                className="p-2 mt-3"
                ref={contactRef}
                type="number"
                placeholder="Contact No."
                required
              />

              <button
                style={{
                  backgroundColor: "indigo",
                  color: "white",
                  fontSize: "20px",
                }}
                className="mb-5 mt-5 btn"
                type="submit"
              >
                CONFIRM ORDER
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureOrders;
