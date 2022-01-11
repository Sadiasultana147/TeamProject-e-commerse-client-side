import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Fashion from "./Fashion";
import "./Fashions.css";
import image from "../../../Images/bg.jpg";
import { Container } from "react-bootstrap";

const Fashions = () => {
  const [fashions, setFashion] = useState([]);
  useEffect(() => {
    fetch("https://fast-everglades-79425.herokuapp.com/fashionCollection")
      .then((res) => res.json())
      .then((data) => setFashion(data));
  }, []);
  //Delete Categories

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
        const url = `https://fast-everglades-79425.herokuapp.com/fashionCollection/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = fashions.filter(
                (fashion) => fashion._id !== id
              );
              setFashion(remaining);
            }
          });
      }
    });
  };
  return (
    <div
      style={{
        minHeight: "210vh",
        backgroundImage:
          "linear-gradient(to right bottom, #6db6c3, #70a8ba, #739baf, #748ea1, #748192, #6a7585, #616979, #575d6c, #454e60, #334055, #203349, #08263e)",
      }}
    >
      <div className="d-md-flex align-items-center">
        <div className="col-md-6 text-center">
          <h1 style={{ color: "white" }}>Sale Offer -50% Off This Week</h1>
          <h1 style={{ color: "white" }}>New Arrivals</h1>
        </div>
        <div className="col-md-6 text-center">
          <img src={image} alt="" className="w-75 p-4" />
        </div>
      </div>

      <div className="my-3 fashion-bg">
        <div style={{ backgroundColor: "#E7E0C9" }}>
          <h3
            style={{
              color: "blue",
              textAlign: "center",
              lineHeight: "55px",
            }}
          >
            Explore Our.......New Fashion.......New Style.......New Perspective
          </h3>
        </div>

        <div className="w-75 mx-auto">
          {
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 justify-content-center g-5 mt-4">
              {fashions.map((fashion) => (
                <Fashion
                  key={fashion._id}
                  fashion={fashion}
                  handleDelete={handleDelete}
                ></Fashion>
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Fashions;
