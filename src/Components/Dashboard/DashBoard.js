import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

import AddCategory from "../AddComponents/AddCategory/AddCategory";
import AddCosmetic from "../AddComponents/AddCosmetic/AddCosmetic";
import AddElectronic from "../AddComponents/AddElectronic/AddElectronic";
import AddFashion from "../AddComponents/AddFashion/AddFashion";
import AddFurniture from "../AddComponents/AddFurniture/AddFurniture";
import AddSport from "../AddComponents/AddSport/AddSport";
import ManageOrders from "../AllOrders/ManageOrders/ManageOrders";
import MyOrders from "../AllOrders/MyOrders/MyOrders";
import Electronics from "../AllList/ElectronicsCategory/Electronics";
import Sports from "../AllList/SportsCategory/Sports";
import Cosmetics from "../AllList/Cosmetics/Cosmetics";
import Fashions from "../AllList/Fashions/Fashions";
import Furnitures from "../AllList/Furnitures/Furnitures"

import "./Dashboard.css";
import FurnitureDetails from "../AllDetails/FurnitureDetails/FurnitureDetails";

const Dashboard = () => {
  const { user, logOut, isAdmin, setIsAdmin } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  let { path, url } = useRouteMatch();

  useEffect(() => {
    fetch(`https://fast-everglades-79425.herokuapp.com/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data[0]?.role === "admin") {
          setIsAdmin("admin");
        } else {
          setIsAdmin("user");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user?.email]);

  return (
    <div
      className="p-5"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(to right bottom, #6db6c3, #70a8ba, #739baf, #748ea1, #748192, #6a7585, #616979, #575d6c, #454e60, #334055, #203349, #08263e)",
      }}
    >
      <Container className="my-5 mx-auto py-5">
        <Row>
          <Col md={3} sm={12}>
            <Nav
              defaultActiveKey="/home"
              className="flex-column p-5"
              style={{
                backgroundColor: "#ffb84d",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <Nav.Link className="bg-success text-white mt-3">
                Dashboard
              </Nav.Link>
              {isAdmin === "admin" && (
                <div>
                  <Nav.Link as={Link} to={`${url}/addcategory`}>
                    Add Category
                  </Nav.Link>
                  <Nav.Link as={Link} to={`${url}/addCosmetic`}>
                    Add Cosmetic{" "}
                  </Nav.Link>
                  <Nav.Link as={Link} to={`${url}/addElectronic`}>
                    Add Electronic
                  </Nav.Link>
                  <Nav.Link as={Link} to={`${url}/addSport`}>
                    Add Sport
                  </Nav.Link>

                  <Nav.Link as={Link} to={`${url}/addFashion`}>
                    Add Fashion
                  </Nav.Link>
                  <Nav.Link as={Link} to={`${url}/addFurniture`}>
                    Add Furniture
                  </Nav.Link>
                  <Nav.Link as={Link} to={`${url}/manageorders`}>
                    Manage All Orders
                  </Nav.Link>


                  <Nav.Link
                    role="button"
                    onClick={() => logOut()}
                    className="bg-success text-white"
                  >
                    Logout
                  </Nav.Link>
                </div>
              )}

            </Nav>
          </Col>

          <Col md={9} sm={12} className="text-center">
            <Switch>
              {isAdmin === "admin" && (
                <div>
                  <Route path={`${path}/addCosmetic`}>
                    <AddCosmetic></AddCosmetic>
                  </Route>

                  <Route path={`${path}/addcategory`}>
                    <AddCategory></AddCategory>
                  </Route>
                  <Route path={`${path}/addElectronic`}>
                    <AddElectronic></AddElectronic>
                  </Route>
                  <Route path={`${path}/addSport`}>
                    <AddSport></AddSport>
                  </Route>
                  <Route path={`${path}/addFashion`}>
                    <AddFashion></AddFashion>
                  </Route>
                  <Route path={`${path}/addFurniture`}>
                    <AddFurniture></AddFurniture>
                  </Route>

                </div>
              )}

            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
