import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NotFound from "./Components/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import AddCategory from "./Components/AddComponents/AddCategory/AddCategory";
import Electronics from "./Components/AllList/ElectronicsCategory/Electronics";
import Sports from "./Components/AllList/SportsCategory/Sports";
import Categories from "./Components/AllList/Categories/Categories";

import AddElectronic from "./Components/AddComponents/AddElectronic/AddElectronic";
import AddSport from "./Components/AddComponents/AddSport/AddSport";
import AddFurniture from "./Components/AddComponents/AddFurniture/AddFurniture";
import Furnitures from "./Components/AllList/Furnitures/Furnitures";
import AddFashion from "./Components/AddComponents/AddFashion/AddFashion";
import Fashions from "./Components/AllList/Fashions/Fashions";
import AddCosmetic from "./Components/AddComponents/AddCosmetic/AddCosmetic";
import Cosmetics from "./Components/AllList/Cosmetics/Cosmetics";
import ElectronicDetails from "./Components/AllDetails/ElectronicDetails/ElectronicDetails";
import SportDetails from "./Components/AllDetails/SportDetails/SportDetails";
import FurnitureDetails from "./Components/AllDetails/FurnitureDetails/FurnitureDetails";
import FashionDetails from "./Components/AllDetails/FashionDetails/FashionDetails";

import CosmeticDetails from "./Components/AllDetails/CosmeticDetails/CosmeticDetails";
import ElectricOrders from "./Components/AllOrders/ElectricOrders/ElectricOrders";
import MyOrders from "./Components/AllOrders/MyOrders/MyOrders";
import Home from "./Components/Home/Home";
import AuthProvider from "./Context/AuthProvider";
import CustomerCare from "./Components/CustomerCare/CustomerCare";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import DashBoard from "./Components/Dashboard/DashBoard";
import AllProducts from "./Components/AllList/AllProducts/AllProducts";
import SportsOrder from "./Components/AllOrders/SportsOrder/SportOrders";
import FashionOrders from "./Components/AllOrders/FashionOrders/FashionOrders";
import FurnitureOrders from "./Components/AllOrders/FurnitureOrders/FurnitureOrders";
import CosmeticOrders from "./Components/AllOrders/CosmeticsOrders/CosmeticOrders";
import ManageOrders from "./Components/AllOrders/ManageOrders/ManageOrders";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";

import Payment from "./Components/AllOrders/MyOrders/Payment"

import SearchProducts from "./Components/SearchBar/SearchProducts";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/addcategory">
            <AddCategory></AddCategory>
          </PrivateRoute>
          <PrivateRoute path="/addCosmetic">
            <AddCosmetic></AddCosmetic>
          </PrivateRoute>
          <Route path="/cosmetics">
            <Cosmetics></Cosmetics>
          </Route>
          <Route path="/shop">
            <Categories></Categories>
          </Route>
          <Route path="/electronics">
            <Electronics></Electronics>
          </Route>
          <Route path="/sports">
            <Sports></Sports>
          </Route>
          <Route path="/furnitures">
            <Furnitures></Furnitures>
          </Route>
          <Route path="/fashions">
            <Fashions></Fashions>
          </Route>
          <PrivateRoute path="/addElectronic">
            <AddElectronic></AddElectronic>
          </PrivateRoute>
          <PrivateRoute path="/addSport">
            <AddSport></AddSport>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/addFashion">
            <AddFashion></AddFashion>
          </PrivateRoute>
          <PrivateRoute path="/addFurniture">
            <AddFurniture></AddFurniture>
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
            <MyOrders></MyOrders>
          </PrivateRoute>

          <PrivateRoute path="/allproducts">
            <AllProducts></AllProducts>
          </PrivateRoute>
          <PrivateRoute exact path="/customer">
            <CustomerCare></CustomerCare>
          </PrivateRoute>
          <PrivateRoute path="/pay">
            <Payment></Payment>
          </PrivateRoute>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/manageorders">
            <ManageOrders></ManageOrders>
          </Route>

          <Route path="/electronicDetails/:electronicId">
            <ElectronicDetails></ElectronicDetails>
          </Route>
          <Route path="/sportDetails/:sportId">
            <SportDetails></SportDetails>
          </Route>
          <Route path="/furnituredetails/:furnitureId">
            <FurnitureDetails></FurnitureDetails>
          </Route>
          <Route path="/fashiondetails/:fashionId">
            <FashionDetails></FashionDetails>
          </Route>
          <Route path="/cosmeticdetails/:cosmeticId">
            <CosmeticDetails></CosmeticDetails>
          </Route>

          <PrivateRoute path="/electronicsOrder/:_id">
            <ElectricOrders></ElectricOrders>
          </PrivateRoute>
          <PrivateRoute path="/sportsOrder/:_id">
            <SportsOrder></SportsOrder>
          </PrivateRoute>
          <PrivateRoute path="/cosmeticOrder/:_id">
            <CosmeticOrders></CosmeticOrders>
          </PrivateRoute>
          <PrivateRoute path="/fashionsOrder/:_id">
            <FashionOrders></FashionOrders>
          </PrivateRoute>
          <PrivateRoute path="/furnitureOrder/:_id">
            <FurnitureOrders></FurnitureOrders>
          </PrivateRoute>
          <Route path="/searchResult">
            <SearchProducts></SearchProducts>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
