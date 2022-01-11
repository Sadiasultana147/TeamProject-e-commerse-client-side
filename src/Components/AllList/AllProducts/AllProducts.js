import React, { useEffect, useState } from "react";
import AllProduct from "./AllProduct";

const AllProducts = () => {
  const [fashions, setFashion] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [sports, setSports] = useState([]);
  const [cosmetics, setCosmetics] = useState([]);
  const [furnitures, setFurnitures] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/fashionCollection")
      .then((res) => res.json())
      .then((data) => setFashion(data));
    fetch("http://localhost:5000/electronicCollection")
      .then((res) => res.json())
      .then((data) => setElectronics(data));
    fetch("http://localhost:5000/sportCollection")
      .then((res) => res.json())
      .then((data) => setSports(data));
    fetch("http://localhost:5000/cosmeticCollection")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
    fetch("http://localhost:5000/furnitureCollection")
      .then((res) => res.json())
      .then((data) => setFurnitures(data));
  }, []);
  return (
    <div>
      {
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-5 d-flex justify-content-center mb-5 pb-5  ">
          {fashions.map((product) => (
            <AllProduct key={product._id} product={product}></AllProduct>
          ))}
          {sports.map((product) => (
            <AllProduct key={product._id} product={product}></AllProduct>
          ))}
          {electronics.map((product) => (
            <AllProduct key={product._id} product={product}></AllProduct>
          ))}
          {cosmetics.map((product) => (
            <AllProduct key={product._id} product={product}></AllProduct>
          ))}
          {furnitures.map((product) => (
            <AllProduct key={product._id} product={product}></AllProduct>
          ))}
        </div>
      }
    </div>
  );
};

export default AllProducts;
