import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import NosotrosPage from './NosotrosPage';
import NavBar from "../components/NavBar";
import ItemsListContainer from "../containers/ItemsListContainer";
import OhhPage from "./OhhPage";
import LoginPage from "./LoginPage";
import Footer from "../components/Footer";
import ItemDetailPage from "./ItemDetailPage";
import IdeasPage from "./IdeasPage";
import CheckoutPage from './CheckoutPage';
import SignUpPage from "./SignUpPage";
import { useAuth } from '../contexts/AuthContext';

export default function AppRouter() {
  const { currentUser } = useAuth();
  
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/planifica">
          {currentUser !== null ? <ItemsListContainer /> : <LoginPage />}
        </Route>
        <Route path="/planifica/filtro/:id">
          {currentUser !== null ? <ItemsListContainer /> : <LoginPage />}
        </Route>
        <Route path="/planifica/detalle/:id">
          {currentUser !== null ? <ItemDetailPage /> : <LoginPage />}
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
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/checkout">
          {currentUser !== null ? <CheckoutPage /> : <LoginPage />}
        </Route>
      </Switch>

      <Footer />

    </Router>
  );
}
