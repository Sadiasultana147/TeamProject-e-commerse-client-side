import { ControlCameraOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hook/useAuth";
import "./MyOrders.css";

const MyOrder = () => {
  const [allOrders, setAllOrders] = useState([]);
  const { user, totalPrice, setTotalPrice, processing, setProcessing } =
    useAuth();

  useEffect(() => {
    fetch("https://fast-everglades-79425.herokuapp.com/orderCollection")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  //DELETE ORDER

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://fast-everglades-79425.herokuapp.com/orderCollection/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = allOrders.filter((order) => order._id !== id);
              setAllOrders(remaining);
            }
          });
      }
    });
  };



  const myOrder = allOrders.filter(order => (order.userEmail == user.email))

  const total = ((myOrder.reduce((a, v) => a = a + parseFloat(v.price), 0)))


  const handlePay = () => {
    setTotalPrice(total);
  };

  return (
    <div>
      <div className=" overflow-hidden detail-container">
        <h2 className="my-5 text-center">My Total Orders</h2>
        <div className="text-center payment-container mx-auto">
          <h4>Total Orders: {myOrder.length}</h4>

          <h4>Total Price: ${total}</h4>

          <Link to="/pay">
            <button className="btn btn-info payment-btn" onClick={handlePay}>
              PAY NOW
            </button>
          </Link>
        </div>

        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 align-items-center justify-content-center">
          {myOrder.map((order) => (
            <div>
              <div className="col h-100 ">
                <div className=" cardbox m-5 d-md-flex">
                  <div col-md-6>
                    <img
                      className="w-75 mt-2"
                      src={order.productImage}
                      alt=""
                    />
                  </div>

                  <div col-md-6>
                    <h4>
                      Product Name:{" "}
                      <span style={{ color: "black" }}>
                        {" "}
                        {order.productName}
                      </span>
                    </h4>


                    <hr style={{ border: "2px solid blue" }} />
                    <h6>
                      PRICE : <span>$ {order.price}</span>
                    </h6>
                    <hr style={{ border: "2px solid blue" }} />
                    <h6>{order.status}</h6>

                    <button
                      style={{ backgroundColor: "darkred" }}
                      className="mb-4 btn "
                      onClick={() => handleDelete(order._id)}
                    >
                      <i style={{ color: "white" }} class="fa fa-trash"></i>
                      <span className="ps-1" style={{ color: "white" }}>
                        DELETE
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default MyOrder;
