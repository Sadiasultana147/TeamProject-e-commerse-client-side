import React from "react";
import { Link } from "react-router-dom";

const ManageOrder = (props) => {
  const {
    _id,
    status,
    productImage,
    userEmail,
    UserName,
    city,
    address,
    contact,
    productName,
  } = props.order;
  const { handleConfirm } = props;
  const { handleDelete } = props;
  console.log(city);
  return (
    <div>
      <div className="col h-100">
        <div
          style={{ backgroundColor: "rgb(200,235,241)" }}
          className="cardbox w-100 card h-100"
        >
          <div>
            <img src={productImage} alt="" className=" w-75 h-100 p-5" />
          </div>
          <div className="card-body text-center">
            <h4 className="card-text">{productName}</h4>
          </div>
          <div className="card-body text-center">
            <h4 className="card-text">{UserName}</h4>
          </div>
          <div className="card-body text-center">
            <h4 className="card-text">{userEmail}</h4>
          </div>
          <div className="card-body text-center">
            <h4 className="card-text">{city}</h4>
          </div>
          <div className="card-body text-center">
            <h4 className="card-text">{address}</h4>
          </div>
          <div className="card-body text-center">
            <h4 className="card-text">{contact}</h4>
          </div>
          <div className="card-body text-center">
            <h4 className="card-text">{status}</h4>
          </div>

          <div class="card-footer bg-transparent border-success d-flex justify-content-between">
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

            {status === "pending" && (
              <button
                onClick={() => handleConfirm(_id)}
                className="btn"
                style={{ backgroundColor: "indigo", color: "white" }}
              >
                Confirm
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
