import React, { useRef } from "react";
import { useHistory, useLocation } from "react-router";
import Swal from "sweetalert2";

const AddCosmetic = () => {
  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/cosmetics";
  const nameRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const featuresRef = useRef();

  const handleCosmetic = (e) => {
    const name = nameRef.current.value;

    const image = imageRef.current.value;
    const category = categoryRef.current.value;
    const price = priceRef.current.value;
    const features = featuresRef.current.value;

    const newCosmetic = { name, image, category, price, features };

    fetch("https://fast-everglades-79425.herokuapp.com/CosmeticCollection", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCosmetic),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "New Cosmetic Product Added Successfully",
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
        Add New Cosmetic Product
      </h1>
      <div className=" mb-5">
        <form className="form" onSubmit={handleCosmetic}>
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
            <span className="span ps-3">ImageURL</span>
          </label>
          <label className="label" for="category">
            <input
              className="input"
              type="text"
              id="category"
              placeholder="category"
              ref={categoryRef}
            />
            <span className="span ps-3">Category</span>
          </label>
          <label className="label" for="price">
            <input
              className="input"
              type="text"
              id="price"
              placeholder="price"
              ref={priceRef}
            />
            <span className="span ps-3">Price</span>
          </label>
          <label className="label" for="features">
            <input
              className="input"
              type="text"
              id="features"
              placeholder="features"
              ref={featuresRef}
            />
            <span className="span ps-3">Features</span>
          </label>

          <button className="button" type="submit">
            Add Cosmetic
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCosmetic;
