import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Cosmetic from "./Cosmetic";
import image from "../../../Images/cosmetics.jpg";
import "./Cosmetics.css";

const Cosmetics = () => {
  const [cosmetics, setCosmetic] = useState([]);
  useEffect(() => {
    fetch("https://fast-everglades-79425.herokuapp.com/CosmeticCollection")
      .then((res) => res.json())
      .then((data) => setCosmetic(data));
  }, []);

  //Delete Cosmetic

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
        const url = `https://fast-everglades-79425.herokuapp.com/CosmeticCollection/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = cosmetics.filter(
                (Cosmetic) => Cosmetic._id !== id
              );
              setCosmetic(remaining);
            }
          });
      }
    });
  };
  return (
    <div
      style={{
        minHeight: "235vh",
        backgroundImage:
          "linear-gradient(to right bottom, #6db6c3, #70a8ba, #739baf, #748ea1, #748192, #6a7585, #616979, #575d6c, #454e60, #334055, #203349, #08263e)",
      }}
    >
      <div className="d-md-flex align-items-center justify-content-center">
        <div className="col-md-6 text-center">
          <h1 style={{ color: "white" }}>BEAUTY OFFERS!</h1>
          <h1 style={{ color: "white" }}>Up to 60% off Sale!</h1>
        </div>
        <div className="col-md-6 cosmetics-img">
          <img src={image} alt="" className="w-75" />
        </div>
      </div>

      <div style={{ backgroundColor: "#E7E0C9" }}>
        <h3
          style={{
            color: "blue",
            textAlign: "center",
            lineHeight: "55px",
          }}
        >
          Click and Collect!
        </h3>
      </div>

      <div className="">
        {
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 justify-content-center g-5 mx-auto mt-3">
            {cosmetics.map((cosmetic) => (
              <Cosmetic
                key={cosmetic._id}
                cosmetic={cosmetic}
                handleDelete={handleDelete}
              ></Cosmetic>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Cosmetics;
