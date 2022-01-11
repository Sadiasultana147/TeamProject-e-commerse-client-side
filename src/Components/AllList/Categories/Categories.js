import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Category from "./Category";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fast-everglades-79425.herokuapp.com/categoryCollection")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

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
        const url = `https://fast-everglades-79425.herokuapp.com/categoryCollection/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = categories.filter(
                (category) => category._id !== id
              );
              setCategories(remaining);
            }
          });
      }
    });
  };
  return (
    <div
      className="pb-4"
      style={{
        minHeight: "115vh",
        backgroundImage:
          "linear-gradient(to right bottom, #6db6c3, #70a8ba, #739baf, #748ea1, #748192, #6a7585, #616979, #575d6c, #454e60, #334055, #203349, #08263e)",
      }}
    >
      <h3 className="text-center pt-5" style={{ color: "white" }}>
        ---- Shop by Department ----
      </h3>
      <div className="mt-5">
        {
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 d-flex justify-content-center w-75 mx-auto gy-5 mb-5 categories">
            {categories.map((category) => (
              <Category
                key={category._id}
                category={category}
                handleDelete={handleDelete}
              ></Category>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Categories;
