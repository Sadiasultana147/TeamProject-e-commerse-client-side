import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Electronic from "./Electronic";
import "./Electronics.css";
import { Container } from "react-bootstrap";
import image from "../../../Images/electronics.jpg";

const Electronics = () => {
  const [electronics, setElectronic] = useState([]);
  useEffect(() => {
    fetch("https://fast-everglades-79425.herokuapp.com/electronicCollection")
      .then((res) => res.json())
      .then((data) => setElectronic(data));
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
        const url = `https://fast-everglades-79425.herokuapp.com/electronicCollection/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = electronics.filter(
                (electronic) => electronic._id !== id
              );
              setElectronic(remaining);
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
        minHeight: "230vh",
      }}
    >
      <div className="electronics"></div>

      <div className="">
        {
          <div className="e-ctg row row-cols-1 row-cols-md-2 row-cols-lg-2 justify-content-center g-5 mx-auto my-5">
            {electronics.map((electronic) => (
              <Electronic
                key={electronic._id}
                electronic={electronic}
                handleDelete={handleDelete}
              ></Electronic>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Electronics;
