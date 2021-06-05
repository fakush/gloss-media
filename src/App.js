import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./pages/AppRouter";
import { AuthContextProvider } from './contexts/AuthContext';
import { OrderContextProvider } from './contexts/OrderContext';

export default function App() {
  return (
    <AuthContextProvider>
      <OrderContextProvider>
        <AppRouter />
      </OrderContextProvider>
    </AuthContextProvider>
  );
}