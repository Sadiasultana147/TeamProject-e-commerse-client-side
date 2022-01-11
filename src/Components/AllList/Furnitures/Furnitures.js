import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Furniture from "./Furniture";
import "./Furnitures.css";
import image from "../../../Images/sofa.jpg";
import image1 from "../../../Images/sale.jpg";

const Furnitures = () => {
  const [furnitures, setFurnitures] = useState([]);
  useEffect(() => {
    fetch("https://fast-everglades-79425.herokuapp.com/furnitureCollection")
      .then((res) => res.json())
      .then((data) => setFurnitures(data));
  }, []);
  //Delete Furniture

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
        const url = `https://fast-everglades-79425.herokuapp.com/furnitureCollection/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = furnitures.filter(
                (furniture) => furniture._id !== id
              );
              setFurnitures(remaining);
            }
          });
      }
    });
  };
  return (
    <div
      className="furniture-container"
      style={{
        backgroundImage:
          "linear-gradient(to right bottom, #6db6c3, #70a8ba, #739baf, #748ea1, #748192, #6a7585, #616979, #575d6c, #454e60, #334055, #203349, #08263e)",
        minHeight: "200vh",
      }}
    >
      <div className="d-md-flex align-items-center text-center">
        <div className="col-md-3 p-5 ms-3 sale-msg">
          <h2 style={{ color: "white" }}>Luxurious Furniture</h2>
          <ul
            className="bullet"
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            <li>Convenience</li>
            <li>Better Prices</li>
            <li>More Variety</li>
          </ul>
        </div>

        <div className="col-md-3 ms-5 sale-img">
          <img src={image1} alt="" className="w-75" />
        </div>

        <div className="col-md-6 f-banner">
          <img src={image} alt="" className="w-75" />
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
          The Furniture You Always Wanted
        </h3>
      </div>

      <div className="w-100 mx-auto p-3">
        {
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 justify-content-center g-5 mt-2 mb-5 pb-3">
            {furnitures.map((furniture) => (
              <Furniture
                key={furniture._id}
                furniture={furniture}
                handleDelete={handleDelete}
              ></Furniture>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Furnitures;
