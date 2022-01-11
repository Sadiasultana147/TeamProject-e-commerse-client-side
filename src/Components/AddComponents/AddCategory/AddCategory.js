import React, { useRef } from "react";
import { useHistory, useLocation } from "react-router";
import Swal from "sweetalert2";
import "../AddCategory.css";

const AddCategory = () => {
  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";
  const nameRef = useRef();
  const imageRef = useRef();

  const handleCategory = (e) => {
    const name = nameRef.current.value;

    const image = imageRef.current.value;

    const newCategory = { name, image };

    fetch("https://fast-everglades-79425.herokuapp.com/categoryCollection", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "New Category Added Successfully",
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
    <div>
      <h1 style={{ color: "white" }} className="my-5 ">
        Add New Category
      </h1>
      <div className=" mb-5 ">
        <form className="form" onSubmit={handleCategory}>
          <label className="label" for="name">
            <input
              className="input"
              type="text"
              id="name"
              placeholder="Name"
              ref={nameRef}
            />
            <span className="span px-3">Name</span>
          </label>

          <label className="label" for="image">
            <input
              className="input"
              type="text"
              id="imageURl"
              placeholder="imageURL"
              ref={imageRef}
            />
            <span className="span px-3">ImageURL</span>
          </label>

          <button className="button" type="submit">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
