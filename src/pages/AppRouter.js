import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import NosotrosPage from './NosotrosPage';
import NavBar from "../components/NavBar";
import ItemsListContainer from "../containers/ItemsListContainer";
// import FilteredListContainer from "../containers/FilteredListContainer";
import OhhPage from "./OhhPage";
import LoginPage from "./LoginPage";
import Footer from "../components/Footer";
import ItemDetailPage from "./ItemDetailPage";
import IdeasPage from "./IdeasPage";
import CheckoutPage from './CheckoutPage';

export default function AppRouter() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/planifica">
          <ItemsListContainer />
        </Route>
        <Route path="/planifica/filtro/:id">
          <ItemsListContainer />
        </Route>
        <Route path="/planifica/detalle/:id">
          <ItemDetailPage />
        </Route>
        <Route path="/ohh">
          <OhhPage />
        </Route>
        <Route path="/ideas">
          <IdeasPage />
        </Route>
        <Route path="/nosotros">
          <NosotrosPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
      </Switch>

      <Footer />

    </Router>
  );
}
