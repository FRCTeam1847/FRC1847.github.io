import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import Layout from "./Layout";
import React from "react";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
