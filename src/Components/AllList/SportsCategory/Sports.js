import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Sport from "./Sport";
import "./Sports.css";
import image1 from "../../../Images/sports5.jpg";

const Sports = () => {
  const [sports, setSport] = useState([]);
  useEffect(() => {
    fetch("https://fast-everglades-79425.herokuapp.com/sportCollection")
      .then((res) => res.json())
      .then((data) => setSport(data));
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
        const url = `https://fast-everglades-79425.herokuapp.com/sportCollection/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = sports.filter((sport) => sport._id !== id);
              setSport(remaining);
            }
          });
      }
    });
  };
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right bottom, #6db6c3, #70a8ba, #739baf, #748ea1, #748192, #6a7585, #616979, #575d6c, #454e60, #334055, #203349, #08263e)",
        minHeight: "200vh",
        overflow: "hidden",
      }}
    >
      <div className="d-md-flex align-items-center text-center">
        <div className="col-md-5 p-5">
          <h1 style={{ color: "white", fontWeight: "900" }}>MEGA SPORTS</h1>
          <h2 style={{ fontWeight: "900", fontSize: "50px", color: "blue" }}>
            CLEARANCE SALE!
          </h2>
        </div>

        <div className="col-md-7">
          <img src={image1} alt="" className="w-100 p-5" />
        </div>
      </div>

      <div className="my-3" style={{ backgroundColor: "#E7E0C9" }}>
        <h3
          style={{
            color: "blue",
            textAlign: "center",
            lineHeight: "55px",
          }}
        >
          Sports Equipments You'll Need
        </h3>
      </div>
      <div className="w-100 mx-auto px-5">
        {
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 justify-content-center g-5 mt-2 mb-5 pb-3">
            {sports.map((sport) => (
              <Sport
                key={sport._id}
                sport={sport}
                handleDelete={handleDelete}
              ></Sport>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Sports;
