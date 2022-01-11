import React, { useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import useAuth from "../../Hook/useAuth";

const Navigation = () => {
  const { user, isAdmin, setIsAdmin, logOut, isLoading, setIsLoading, } = useAuth();
  console.log(user?.email);
  console.log(user?.displayName);
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
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "#4C4B49" }}
    >
      <Container className="header">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="header-text" to="/home">
              Home
            </NavLink>
            <NavLink className="header-text" to="/shop">
              Shop
            </NavLink>
            {
              (isAdmin == "admin") ?
                <NavLink className="header-text" to="/dashboard">
                  Admin Dashboard
                </NavLink> :
                <NavLink className="header-text" to="/myOrders">
                  MyOrder
                </NavLink>
            }
            {/* {user?.email && (
              <NavLink className="header-text" to="/dashboard">
                Admin Dashboard
              </NavLink>
            )}
            {user?.email && (
              <NavLink className="header-text" to="/myOrders">
                MyOrder
              </NavLink>
            )} */}

            <NavLink className="header-text" to="/register">
              Register
            </NavLink>


            {user?.email ? (

              <Button onClick={logOut} className="menu-button ms-2">
                Log out
              </Button>

            ) : (
              <NavLink className="header-text" to="/login">
                Login
              </NavLink>
            )}
            {user?.email && (
              <Navbar.Brand to="/home" className="header-text text-danger ps-3">
                {user.displayName}{" "}
              </Navbar.Brand>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
