import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import NosotrosPage from './NosotrosPage';
import NavBar from "../components/NavBar";
import PlanificaPage from "./PlanificaPage";
import OhhPage from "./OhhPage";
import LoginPage from "./LoginPage";
import Footer from "../components/Footer";
import ItemDetailPage from "./ItemDetailPage";
import IdeasPage from "./IdeasPage";

export default function AppRouter() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/planifica">
          <PlanificaPage />
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
      </Switch>

      <Footer />

    </Router>
  );
}
