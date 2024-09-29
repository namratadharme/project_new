import React from "react";
import ReactDOM from "react-dom/client";
import Loginpage from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { Route } from "react-router-dom";
import Registration from "./Registration";
import Homepage from "./Mainpages/Home";
import ProtectedRouter from "./Mainpages/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/",
    element: <Loginpage />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRouter>
        <Homepage />
      </ProtectedRouter>
    ),
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
