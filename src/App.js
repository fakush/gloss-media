import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./pages/AppRouter";
import { AuthContextProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}