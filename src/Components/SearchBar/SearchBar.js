import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import "./SearchBar.css";
import { Card, Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import SearchProducts from "./SearchProducts";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hook/useAuth";

const SearchBar = () => {
  const [APIData, setAPIData] = useState([]);
  // const [searchText, setSearchText] = useState('');
  const [name, setName] = useState([]);
  const { searchText, setSearchText } = useAuth();

  const handleButton = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
    console.log(searchText);

    //searchText=searchTextValue
  };
  return (
    <div className="search-field">
      <Container className="search-container">
        <h2 className="search-heading" style={{ color: "salmon" }}>
          Aurora
        </h2>

        <div className="search mx-auto">
          <form className="searchInputs">
            <input onChange={handleButton} placeholder="Search in Aurora...." />

            <Link to="/searchResult">
              <button
                style={{
                  border: "none",
                  backgroundColor: "white",
                  color: "tomato",
                }}
              >
                <SearchIcon />
              </button>
            </Link>
          </form>
        </div>

        <div>
          <FavoriteBorderSharpIcon className="cart" />
          <ShoppingCartOutlinedIcon />
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;
